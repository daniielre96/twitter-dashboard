import { colorPalette } from '../../../constants';

function generateRandomColor(random) {
    return random ? '#'+(Math.random()*0xFFFFFF<<0).toString(16) : colorPalette.primary
}

export default generateRandomColor;