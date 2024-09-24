export const buttonVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary'
}

export const variantConfig = (color, disable) => {
  return {
    [buttonVariants.PRIMARY]: {
      color: color,
      disable: disable
    },
    [buttonVariants.SECONDARY]:{

    },
    [buttonVariants.TERTIARY]:{

    }
  }
}