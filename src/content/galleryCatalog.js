import { artworks as digitalArt } from './artworks.js'
import { artworks as threeDArt } from './threeDArtworks.js'
import { artworks as astronomyPhotos } from './astronomyPhotos.js'
import { digitalArtAlt } from './alt/digitalArt.js'
import { threeDArtAlt } from './alt/threeDArt.js'
import { astronomyPhotoAlt } from './alt/astronomyPhotos.js'

const withAltText = (artworks, descriptions) => artworks.map((artwork, index) => ({
  ...artwork,
  alt: descriptions[index],
}))

export const galleryCatalog = {
  'digital-art': {
    slug: 'digital-art',
    shortTitle: 'Digital Art',
    title: 'Digital Art Gallery',
    description: 'A collection of digital art and illustration.',
    assetDirectory: 'optimized',
    artworks: withAltText(digitalArt, digitalArtAlt),
  },
  '3d-art': {
    slug: '3d-art',
    shortTitle: '3D Art',
    title: '3D Art Gallery',
    description: 'A collection of three-dimensional artwork.',
    assetDirectory: '3d-art',
    artworks: withAltText(threeDArt, threeDArtAlt),
  },
  'astronomy-photos': {
    slug: 'astronomy-photos',
    shortTitle: 'Astronomy Photos',
    title: 'Astronomy Photos Gallery',
    description: 'A collection of astronomy and night-sky photographs.',
    assetDirectory: 'astronomy-photos',
    artworks: withAltText(astronomyPhotos, astronomyPhotoAlt),
  },
}
