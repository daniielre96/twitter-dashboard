import { alpha, colorPalette } from '../../../constants';

export const buttonVariants = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  ERROR: 'error'
}

export const variantConfig = (disabled, loading) => {
  return {
    [buttonVariants.PRIMARY]: {
      color: '#FFFFFF',
      background: disabled || loading ? alpha(colorPalette.primary) : colorPalette.primary,
      border: disabled || loading ? alpha(colorPalette.primary) : colorPalette.primary
    },
    [buttonVariants.SUCCESS]:{
      color: '#FFFFFF',
      background: disabled || loading ? alpha(colorPalette.success) : colorPalette.success,
      border: disabled || loading ? alpha(colorPalette.success) : colorPalette.success
    },
    [buttonVariants.ERROR]:{
      color: '#FFFFFF',
      background: disabled || loading ? alpha(colorPalette.error) : colorPalette.error,
      border: disabled || loading ? alpha(colorPalette.error) : colorPalette.error
    }
  }
}