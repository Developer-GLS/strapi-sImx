import type { Attribute, Schema } from '@strapi/strapi';

export interface FunctionalComponentCta extends Schema.Component {
  collectionName: 'components_functional_component_ctas';
  info: {
    description: '';
    displayName: 'Cta';
  };
  attributes: {
    CtaBgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    CtaButton: Attribute.Component<'functional-component.hero-button', true>;
    CtaCaption: Attribute.Text;
    CtaCssClasses: Attribute.String;
    CtaTitle: Attribute.String;
    CtaType: Attribute.String;
  };
}

export interface FunctionalComponentHeroButton extends Schema.Component {
  collectionName: 'components_functional_component_hero_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'exit';
  };
  attributes: {
    ButtonCssClasses: Attribute.String;
    ButtonLabel: Attribute.String;
    ButtonLink: Attribute.String;
    ButtonType: Attribute.String;
  };
}

export interface GraphicComponentCarousel extends Schema.Component {
  collectionName: 'components_graphic_component_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    CarouselCssClasses: Attribute.String;
    CarouselImgs: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    CarouselSubtitle: Attribute.String;
    CarouselTitle: Attribute.String;
  };
}

export interface GraphicComponentHero extends Schema.Component {
  collectionName: 'components_graphic_component_heroes';
  info: {
    displayName: 'Hero';
    icon: 'picture';
  };
  attributes: {
    HeroBgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    HeroButton: Attribute.Component<'functional-component.hero-button', true>;
    HeroCssClasses: Attribute.String;
    HeroSubtitle: Attribute.String;
    HeroTitle: Attribute.String;
  };
}

export interface TextComponentParagraph extends Schema.Component {
  collectionName: 'components_text_component_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'feather';
  };
  attributes: {
    ParagraphContent: Attribute.RichText;
    ParagraphCssClasses: Attribute.String;
  };
}

export interface TextComponentsQuote extends Schema.Component {
  collectionName: 'components_text_components_quotes';
  info: {
    displayName: 'Quote';
    icon: 'feather';
  };
  attributes: {
    QuoteAuthor: Attribute.String;
    QuoteContent: Attribute.String;
    QuoteCssClasses: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'functional-component.cta': FunctionalComponentCta;
      'functional-component.hero-button': FunctionalComponentHeroButton;
      'graphic-component.carousel': GraphicComponentCarousel;
      'graphic-component.hero': GraphicComponentHero;
      'text-component.paragraph': TextComponentParagraph;
      'text-components.quote': TextComponentsQuote;
    }
  }
}
