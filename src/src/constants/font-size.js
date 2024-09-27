export const fontSizes = {
    TITLE_LARGE: 'titleLarge',    // Título principal
    TITLE_MEDIUM: 'titleMedium',  // Subtítulo o título secundario
    TITLE_SMALL: 'titleSmall',    // Encabezado pequeño
    BODY_LARGE: 'bodyLarge',      // Texto grande
    BODY_MEDIUM: 'bodyMedium',    // Texto normal
    BODY_SMALL: 'bodySmall',      // Texto pequeño
    CAPTION: 'caption',           // Texto auxiliar o de apoyo
  }
  
  export const fontStyleMap = {
    [fontSizes.TITLE_LARGE]: { fontSize: '48px', fontFamily: 'Montserrat, sans-serif' },   // Principal título
    [fontSizes.TITLE_MEDIUM]: { fontSize: '36px', fontFamily: 'Montserrat, sans-serif' },  // Título secundario
    [fontSizes.TITLE_SMALL]: { fontSize: '24px', fontFamily: 'Montserrat, sans-serif' },   // Encabezado pequeño
    [fontSizes.BODY_LARGE]: { fontSize: '18px', fontFamily: 'Roboto, sans-serif' },        // Texto grande
    [fontSizes.BODY_MEDIUM]: { fontSize: '16px', fontFamily: 'Roboto, sans-serif' },       // Texto normal (párrafos)
    [fontSizes.BODY_SMALL]: { fontSize: '14px', fontFamily: 'Roboto, sans-serif' },        // Texto secundario o de apoyo
    [fontSizes.CAPTION]: { fontSize: '12px', fontFamily: 'Roboto, sans-serif' }           // Pie de página, etiquetas
}