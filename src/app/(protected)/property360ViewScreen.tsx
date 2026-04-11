import { DEVICE } from '@/src/assets/constants';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const PANORAMA_IMAGE_URL =
  'https://renderstuff.com/assets/133/equirectangular-360-panorama-interior-rendering-by-3ds-max-and-v-ray.jpg';

const STEP = 15; // degrees per button press

export default function Property360ViewScreen() {
  const insets = useSafeAreaInsets();
  const webViewRef = useRef<WebView>(null);
  const router = useRouter();

  const sendCommand = (js: string) => {
    webViewRef.current?.injectJavaScript(`${js}; true;`);
  };

  const panLeft = () =>
    sendCommand(`viewer.setYaw(viewer.getYaw() - ${STEP}, true)`);
  const panRight = () =>
    sendCommand(`viewer.setYaw(viewer.getYaw() + ${STEP}, true)`);
  const panUp = () =>
    sendCommand(`viewer.setPitch(viewer.getPitch() + ${STEP}, true)`);
  const panDown = () =>
    sendCommand(`viewer.setPitch(viewer.getPitch() - ${STEP}, true)`);
  const zoomIn = () =>
    sendCommand(`viewer.setHfov(viewer.getHfov() - 10, true)`);
  const zoomOut = () =>
    sendCommand(`viewer.setHfov(viewer.getHfov() + 10, true)`);
  const resetView = () =>
    sendCommand(
      `viewer.setYaw(0, true); viewer.setPitch(0, true); viewer.setHfov(100, true)`,
    );

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"/>
  <script src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; background: #0a0a0a; overflow: hidden; }
    #panorama { width: 100%; height: 100%; }
    .pnlm-compass { display: none !important; }
    .pnlm-load-box { 
      background: rgba(10,10,10,0.85) !important;
      border: 1px solid rgba(212,175,55,0.3) !important;
      border-radius: 8px !important;
    }
    .pnlm-load-box p { color: #d4af37 !important; font-family: sans-serif; }
    .pnlm-lbar { background: #d4af37 !important; }
    .pnlm-lbar-fill { background: rgba(212,175,55,0.3) !important; }
  </style>
</head>
<body>
  <div id="panorama"></div>
  <script>
    var viewer = pannellum.viewer('panorama', {
      type: 'equirectangular',
      panorama: '${PANORAMA_IMAGE_URL}',
      autoLoad: true,
      autoRotate: -1.5,
      autoRotateInactivityDelay: 3000,
      compass: false,
      showControls: false,
      mouseZoom: true,
      draggable: true,
      friction: 0.15,
      hfov: 100,
      minHfov: 40,
      maxHfov: 120,
      pitch: 0,
      yaw: 0,
    });
  </script>
</body>
</html>
`;

  return (
    <View className='flex-1'>
      {/* <StatusBar barStyle='light-content' backgroundColor='#0a0a0a' /> */}

      {/* Panorama WebView */}
      <WebView
        ref={webViewRef}
        source={{ html }}
        style={{
          width: DEVICE.width,
          height: DEVICE.height,
        }}
        scrollEnabled={false}
        bounces={false}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled
        domStorageEnabled
        originWhitelist={['*']}
        mixedContentMode='always'
      />

      {/* Header overlay */}
      <View
        className='absolute mx-6'
        style={{
          marginTop: DEVICE.statusBar,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className='h-[50px] w-[50px] bg-white items-center justify-center rounded-full'
        >
          <MaterialIcons name='arrow-back-ios-new' size={16} color='black' />
        </TouchableOpacity>
      </View>

      <BlurView
        tint='dark'
        intensity={100} // "light" | "dark" | "extraDark" | "regular"
        className='h-20 w-10 absolute top-1/2'
      />
      {/* <View className='w-10 h-20 bg-primary absolute top-1/2 rounded-r-xl'></View> */}
      {/* <SafeAreaView style={styles.headerOverlay} pointerEvents='box-none'>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.label360}>360°</Text>
            <Text style={styles.titleText}>Virtual Tour</Text>
          </View>
          <TouchableOpacity style={styles.resetBtn} onPress={resetView}>
            <Text style={styles.resetIcon}>⊙</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView> */}

      {/* Directional Controls */}
      <View style={styles.controlsWrapper} pointerEvents='box-none'>
        {/* Zoom controls - left side */}
        <View style={styles.zoomControls}>
          <TouchableOpacity style={styles.zoomBtn} onPress={zoomIn}>
            <Text style={styles.zoomIcon}>+</Text>
          </TouchableOpacity>
          <View style={styles.zoomDivider} />
          <TouchableOpacity style={styles.zoomBtn} onPress={zoomOut}>
            <Text style={styles.zoomIcon}>−</Text>
          </TouchableOpacity>
        </View>

        {/* D-pad - right side */}
        <View style={styles.dpad}>
          {/* Up */}
          <View style={styles.dpadRow}>
            <TouchableOpacity style={styles.dpadBtn} onPress={panUp}>
              <Text style={styles.dpadArrow}>▲</Text>
            </TouchableOpacity>
          </View>

          {/* Left + Center + Right */}
          <View style={styles.dpadRow}>
            <TouchableOpacity style={styles.dpadBtn} onPress={panLeft}>
              <Text style={styles.dpadArrow}>◀</Text>
            </TouchableOpacity>

            <View style={styles.dpadCenter}>
              <View style={styles.dpadCenterDot} />
            </View>

            <TouchableOpacity style={styles.dpadBtn} onPress={panRight}>
              <Text style={styles.dpadArrow}>▶</Text>
            </TouchableOpacity>
          </View>

          {/* Down */}
          <View style={styles.dpadRow}>
            <TouchableOpacity style={styles.dpadBtn} onPress={panDown}>
              <Text style={styles.dpadArrow}>▼</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Hint bar at bottom */}
      <View style={styles.hintBar} pointerEvents='none'>
        <Text style={styles.hintText}>Drag to explore · Pinch to zoom</Text>
      </View>
    </View>
  );
}

const CTRL_SIZE = 44;
const CTRL_GAP = 6;

const styles = StyleSheet.create({
  // Header
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'rgba(10,10,10,0.55)',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 20,
  },
  titleContainer: {
    alignItems: 'center',
  },
  label360: {
    color: '#d4af37',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  titleText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  resetBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(212,175,55,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetIcon: {
    color: '#d4af37',
    fontSize: 18,
  },

  // Controls wrapper
  controlsWrapper: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },

  // Zoom
  zoomControls: {
    backgroundColor: 'rgba(10,10,10,0.65)',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    overflow: 'hidden',
  },
  zoomBtn: {
    width: CTRL_SIZE,
    height: CTRL_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zoomIcon: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '300',
    lineHeight: 26,
  },
  zoomDivider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },

  // D-pad
  dpad: {
    alignItems: 'center',
    gap: CTRL_GAP,
  },
  dpadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: CTRL_GAP,
  },
  dpadBtn: {
    width: CTRL_SIZE,
    height: CTRL_SIZE,
    borderRadius: 12,
    backgroundColor: 'rgba(10,10,10,0.65)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dpadArrow: {
    color: '#fff',
    fontSize: 13,
  },
  dpadCenter: {
    width: CTRL_SIZE,
    height: CTRL_SIZE,
    borderRadius: 12,
    backgroundColor: 'rgba(212,175,55,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dpadCenterDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d4af37',
    opacity: 0.7,
  },

  // Hint
  hintBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 16,
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(10,10,10,0.5)',
  },
  hintText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 12,
    letterSpacing: 0.5,
  },
});
