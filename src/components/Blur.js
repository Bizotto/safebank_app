import {BlurView, VibrancyView} from '@react-native-community/blur';

export const blur = () => {
  return (
    <Gradient>
      <BlurView intensity={100}>{children}</BlurView>
    </Gradient>
  );
};
