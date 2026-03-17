import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import AppText from './AppText';

interface SecondaryButtonProps {
  label: string;
  onPress?: () => void;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity className='mt-[10px] bg-gray py-5 items-center rounded-3xl'>
      <AppText bold font='raleway' size='xs' color='tertiary'>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
