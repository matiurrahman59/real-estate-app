import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import AppText from './AppText';

const { width } = Dimensions.get('window');

// ── Mock data ────────────────────────────────────────────────────────────────
const PROPERTY = {
  id: '1',
  name: 'Marigold Villa',
  rating: 4.8,
  reviewCount: 128,
  location: 'Bashundhara R/A, Dhaka',
  price: 25000,
  imageUri:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  agent: {
    name: 'Rahim Uddin',
    role: 'Property Agent',
    avatarUri: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  facilities: {
    bedrooms: 4,
    bathrooms: 3,
    garages: 2,
  },
  description:
    'A beautifully designed modern villa nestled in the heart of Bashundhara. ' +
    'Enjoy premium finishes, spacious living areas, and a lush private garden — ' +
    'perfect for families seeking comfort and elegance in the city.',
};

// ── Facility Chip ─────────────────────────────────────────────────────────────
interface FacilityChipProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
}

const FacilityChip = ({ icon, label, value }: FacilityChipProps) => (
  <View className='items-center bg-gray rounded-2xl px-5 py-3 gap-1'>
    {icon}
    <AppText bold font='montserrat' size='small'>
      {value}
    </AppText>
    <AppText font='raleway' color='secondary' className='text-[11px]'>
      {label}
    </AppText>
  </View>
);

// ── Main Screen ───────────────────────────────────────────────────────────────
export default function PropertyDetailScreen() {
  return (
    <View className='flex-1 bg-white'>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {/* ── Hero Image ── */}
        <View style={{ height: 340, width }}>
          <Image
            source={{ uri: PROPERTY.imageUri }}
            style={{ width, height: 340 }}
            resizeMode='cover'
          />

          {/* dark gradient overlay */}
          <View
            className='absolute inset-0'
            style={{
              backgroundColor: 'transparent',
              // simulate gradient with two overlapping views
            }}
          />

          {/* Header buttons */}
          <View
            className='absolute top-0 left-0 right-0 flex-row justify-between items-center px-5'
            style={{ paddingTop: 52 }}
          >
            {/* Back */}
            <TouchableOpacity
              onPress={() => router.back()}
              className='h-10 w-10 rounded-full bg-white items-center justify-center'
              style={{
                shadowColor: '#000',
                shadowOpacity: 0.12,
                shadowRadius: 6,
                elevation: 4,
              }}
            >
              <Feather name='arrow-left' size={18} color='#234F68' />
            </TouchableOpacity>

            {/* Bookmark */}
            <TouchableOpacity
              className='h-10 w-10 rounded-full bg-white items-center justify-center'
              style={{
                shadowColor: '#000',
                shadowOpacity: 0.12,
                shadowRadius: 6,
                elevation: 4,
              }}
            >
              <Feather name='bookmark' size={18} color='#234F68' />
            </TouchableOpacity>
          </View>

          {/* Rating badge on image */}
          <View
            className='absolute bottom-4 left-5 flex-row items-center bg-white rounded-xl px-3 py-1.5 gap-1'
            style={{
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4,
            }}
          >
            <AntDesign name='star' size={13} color='#FFC42D' />
            <AppText bold font='montserrat' size='small' color='primary'>
              {PROPERTY.rating}
            </AppText>
            <AppText font='raleway' color='secondary' className='text-[11px]'>
              ({PROPERTY.reviewCount} reviews)
            </AppText>
          </View>
        </View>

        {/* ── Content Card ── */}
        <View className='bg-white rounded-t-[32px] -mt-6 px-5 pt-6 pb-10'>
          {/* Name + Location */}
          <View className='mb-4'>
            <AppText bold font='raleway' size='large' color='primary'>
              {PROPERTY.name}
            </AppText>
            <View className='flex-row items-center gap-1 mt-1'>
              <Ionicons name='location-sharp' size={13} color='#234F68' />
              <AppText font='raleway' color='secondary' size='small'>
                {PROPERTY.location}
              </AppText>
            </View>
          </View>

          {/* Divider */}
          <View className='h-px bg-gray mb-5' />

          {/* ── Agent Row ── */}
          <View className='flex-row items-center justify-between mb-5'>
            <View className='flex-row items-center gap-3'>
              <Image
                source={{ uri: PROPERTY.agent.avatarUri }}
                className='h-11 w-11 rounded-full'
              />
              <View>
                <AppText bold font='raleway' size='small' color='primary'>
                  {PROPERTY.agent.name}
                </AppText>
                <AppText
                  font='raleway'
                  color='secondary'
                  className='text-[11px]'
                >
                  {PROPERTY.agent.role}
                </AppText>
              </View>
            </View>

            {/* Contact buttons */}
            <View className='flex-row gap-2'>
              <TouchableOpacity
                className='h-9 w-9 rounded-full items-center justify-center'
                style={{ backgroundColor: '#E8F0F5' }}
              >
                <Feather name='phone' size={15} color='#234F68' />
              </TouchableOpacity>
              <TouchableOpacity
                className='h-9 w-9 rounded-full items-center justify-center'
                style={{ backgroundColor: '#E8F0F5' }}
              >
                <Feather name='message-circle' size={15} color='#234F68' />
              </TouchableOpacity>
            </View>
          </View>

          {/* Divider */}
          <View className='h-px bg-gray mb-5' />

          {/* ── Facilities ── */}
          <View className='mb-5'>
            <AppText
              bold
              font='raleway'
              size='medium'
              color='primary'
              className='mb-3'
            >
              Facilities
            </AppText>
            <View className='flex-row justify-between'>
              <FacilityChip
                icon={<Ionicons name='bed-outline' size={22} color='#234F68' />}
                value={PROPERTY.facilities.bedrooms}
                label='Bedrooms'
              />
              <FacilityChip
                icon={
                  <MaterialCommunityIcons
                    name='shower'
                    size={22}
                    color='#234F68'
                  />
                }
                value={PROPERTY.facilities.bathrooms}
                label='Bathrooms'
              />
              <FacilityChip
                icon={
                  <MaterialCommunityIcons
                    name='garage-open'
                    size={22}
                    color='#234F68'
                  />
                }
                value={PROPERTY.facilities.garages}
                label='Garages'
              />
            </View>
          </View>

          {/* Divider */}
          <View className='h-px bg-gray mb-5' />

          {/* ── Description ── */}
          <View className='mb-8'>
            <AppText
              bold
              font='raleway'
              size='medium'
              color='primary'
              className='mb-2'
            >
              Description
            </AppText>
            <AppText
              font='raleway'
              color='secondary'
              size='small'
              className='leading-6'
            >
              {PROPERTY.description}
            </AppText>
          </View>

          {/* ── Price + Book Now ── */}
          <View className='flex-row items-center justify-between'>
            {/* Price */}
            <View>
              <AppText font='raleway' color='secondary' className='text-[11px]'>
                Total Price
              </AppText>
              <View className='flex-row items-baseline gap-1'>
                <AppText bold font='montserrat' size='large' color='primary'>
                  TK {PROPERTY.price.toLocaleString()}
                </AppText>
                <AppText
                  font='raleway'
                  color='secondary'
                  className='text-[11px]'
                >
                  /month
                </AppText>
              </View>
            </View>

            {/* CTA */}
            <TouchableOpacity
              className='flex-row items-center gap-2 rounded-2xl px-7 py-4'
              style={{ backgroundColor: '#234F68' }}
              activeOpacity={0.85}
            >
              <AppText bold font='montserrat' size='small' color='white'>
                Book Now
              </AppText>
              <Feather name='arrow-right' size={15} color='#fff' />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
