import { artworks as digitalArt } from './artworks.js'
import { artworks as threeDArt } from './threeDArtworks.js'
import { artworks as astronomyPhotos } from './astronomyPhotos.js'

export const galleryCatalog = {
  'digital-art': {
    slug: 'digital-art',
    shortTitle: 'Digital Art',
    title: 'Digital Art Gallery',
    description: 'A collection of digital art and illustration.',
    assetDirectory: 'optimized',
    artworks: digitalArt,
  },
  '3d-art': {
    slug: '3d-art',
    shortTitle: '3D Art',
    title: '3D Art Gallery',
    description: 'A collection of three-dimensional artwork.',
    assetDirectory: '3d-art',
    artworks: threeDArt,
  },
  'astronomy-photos': {
    slug: 'astronomy-photos',
    shortTitle: 'Astronomy Photos',
    title: 'Astronomy Photos Gallery',
    description: 'A collection of astronomy and night-sky photographs.',
    assetDirectory: 'astronomy-photos',
    artworks: astronomyPhotos,
  },
}
