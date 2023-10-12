import type { Schema, Attribute } from '@strapi/strapi';

export interface GalleryGallery extends Schema.Component {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    name: Attribute.String;
    images: Attribute.Media;
  };
}

export interface LandingAboutUs extends Schema.Component {
  collectionName: 'components_landing_about_uses';
  info: {
    displayName: 'Text Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface LandingDivider extends Schema.Component {
  collectionName: 'components_landing_dividers';
  info: {
    displayName: 'Divider';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface LandingImageSection extends Schema.Component {
  collectionName: 'components_landing_image_sections';
  info: {
    displayName: 'Image section';
  };
  attributes: {
    images: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gallery.gallery': GalleryGallery;
      'landing.about-us': LandingAboutUs;
      'landing.divider': LandingDivider;
      'landing.image-section': LandingImageSection;
    }
  }
}
