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

export interface LandingSpacer extends Schema.Component {
  collectionName: 'components_landing_spacers';
  info: {
    displayName: 'Spacer';
  };
  attributes: {};
}

export interface LandingTitle extends Schema.Component {
  collectionName: 'components_landing_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gallery.gallery': GalleryGallery;
      'landing.about-us': LandingAboutUs;
      'landing.divider': LandingDivider;
      'landing.image-section': LandingImageSection;
      'landing.spacer': LandingSpacer;
      'landing.title': LandingTitle;
    }
  }
}
