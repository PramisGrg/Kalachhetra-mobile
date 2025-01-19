import { TArtSchema } from "~/schema/art.schema";
/**
 * Miscellaneous
 */
export interface UnsplashImageType {
  id: string;
  slug: string;
  urls: {
    full: string;
    regular: string;
  };
  user: {
    id: string;
    first_name: string;
  };
}

export interface ImageExtendType extends File {
  preview: string;
}

export interface FormProgessBarType {
  id: string;
  title: string;
  description: string;
  fields: string[];
}

export type ToastTexts = Record<
  string,
  {
    title: string;
    description: string;
  }
>;

/**
 * All actor types & values
 */
export type ActorActions = ArtActions;
export type ActorValues = TArtSchema;

/**
 * Related to the art type
 */
export interface GetArt {
  _id: string;
  title: string;
  description: string;
  timeFrame: TimeFrame;
  images: Images;
  category: any[];
  subCategory: SubCategoryItem[];
  style: StyleItem[];
  theme: string;
  size: string;
  material: MaterialItem[];
  priceCurrency: string;
  price: number;
  priceType: string;
  location: string;
  keywords: string[];
  isHighlighted: boolean;
  isFramed: boolean;
  shippingInfo: ShippingInfo;
  likeCount: number;
  likedBy: any[];
  comments: any[];
  commentCount: number;
  shareCount: number;
  artist: Artist | null;
  exhibitionsAndAwards: any[];
}

interface TimeFrame {
  startDate: string;
  endDate: string;
}
interface Images {
  featured: string;
  samples: string[];
}
interface SubCategoryItem {
  label: string;
  value: string;
  _id: string;
}
interface StyleItem {
  label: string;
  value: string;
  _id: string;
}
interface MaterialItem {
  name: string;
  value: string;
}
interface ShippingInfo {
  shippingType: string;
}
interface Artist {
  _id: string;
}
export interface LabelValue {
  name: string;
  value: string;
}
export interface LabelValueNew {
  label: string;
  value: string;
}

/**
 * Related to comment type...
 */
export interface Comment {
  _id: string;
  comment: string;
  author: SingleArtist;
  replies: Comment[];
  createdAt: string;
  updatedAt: string;
}

/**
 * Related to the single art
 */
export interface SingleArt {
  timeFrame: TimeFrame;
  images: Images;
  shippingInfo: ShippingInfo;
  _id: string;
  title: string;
  description: string;
  category: string[];
  subCategory: SubCategoryItem[];
  style: StyleItem[];
  theme: string;
  size: string;
  material: MaterialItem[];
  priceCurrency: string;
  price: number;
  priceType: string;
  location: string;
  keywords: string[];
  isHighlighted: boolean;
  exhibitionsAndAwards: ExhibitionsAndAwardsItem[];
  isFramed: boolean;
  collections: string;
  likeCount: number;
  likedBy: any[];
  comments: CommentsItem[];
  commentCount: number;
  shareCount: number;
  artist: SingleArtist;
}
interface CommentsItem {
  _id: string;
  comment: string;
  author: string;
  replies: any[];
  createdAt: string;
  updatedAt: string;
}
interface ExhibitionsAndAwardsItem {
  eventName: string;
  description: string;
  date: string;
  _id: string;
}
interface Address {
  country: string;
  street: string;
  city: string;
  state: string;
  zip: number;
}
export interface SingleArtist {
  address: Address;
  _id: string;
  email: string;
  avatarImage: string;
  bannerImage: string;
  followings: any[];
  provider: string;
  providerId: string;
  artCategory: StyleItem[];
  socialHandles: any[];
  createdAt: string;
  updatedAt: string;
  artistDetails: string;
  dob: string;
  fullName: string;
  gender: string;
  phoneNumber: string;
  userBio: string;
  userName: string;
}

export interface PersonalInfo {
  address: Address;
  _id: string;
  email: string;
  avatarImage: string;
  bannerImage: string;
  followings: any[];
  provider: string;
  providerId: string;
  isVerified: boolean;
  isProfileComplete: boolean;
  isDeactivated: boolean;
  artCategory: ArtCategoryItem[];
  socialHandles: any[];
  createdAt: string;
  updatedAt: string;
  role: string;
  artistDetails: string;
  dob: string;
  fullName: string;
  gender: string;
  phoneNumber: string;
  userBio: string;
  userName: string;
}

interface ArtCategoryItem {
  label: string;
  value: string;
  _id: string;
}

/**
 * _________________ALL RELATED TO THE ENUMS______________
 */

/**
 * Related to the actors
 */
export enum ActorRole {
  ARTIST = "artist",
  ART_GEEK = "artgeek",
}

/**
 * Related to the arts
 */
export enum ArtActions {
  "ART_GET" = "art-get",
  "ART_POST" = "art-post",
  "ART_PATCH" = "art-patch",
  "ART_DELETE" = "art-delete",
}

/**
 * Related to the gender
 */
export enum Gender {
  "MALE" = "male",
  "FEMALE" = "female",
  "OTHER" = "other",
}

/**
 * Related to the toast
 */
export enum ToastIds {
  "ART_TOAST" = "art-toast",
  "ART_GEEK_TOAST" = "art-geek-toast",
  "ARTIST_TOAST" = "artist-toast",
  "LOGIN_TOAST" = "login-toast",
  "SIGNUP_TOAST" = "signup-toast",
  "EMAIL_VERIFICATION" = "email-verification",
  "RESEND_VERIFICATION" = "resend-verification",
  "PASSWORD_RESET" = "password-reset",
  "FORGOT_PASSWORD" = "forgot-password",
  "VALIDATE_OTP" = "validate-otp",
  "IMAGE_UPLOAD" = "image-upload",

  // Related to comments and reply
  "ART_COMMENTS" = "art-comments",

  // MISC
  "CATEGORY_TOAST" = "category-toast",
}

/**
 * Related to the pricing
 */
export enum PriceCurrency {
  "USD" = "USD",
  "EUR" = "EUR",
  "GBP" = "GBP",
  "NPR" = "NPR",
}
export enum PriceType {
  "FIXED" = "FIXED",
  "NEGOTIABLE" = "NEGOTIABLE",
}

/**
 * Related to the shipping
 */
export enum ShippingType {
  "MANUAL" = "MANUAL",
  "PLATFORM" = "PLATFORM",
}

/**
 * Related to the route enums
 */
export enum FEEndpoints {
  HOME = "/",
  DASHBOARD = "/dashboard",
  LOGIN = "/auth/login",
  VALIDATE_OTP = "/auth/validate-otp",
  RESET_PASSWORD = "/auth/reset-password",

  EMAIL_VERIFICATION = "/email-verification",
}

export enum BEEndpoints {
  // Related to the auth
  LOGIN_GMAIL = "/auth/login",
  LOGOUT = "/auth/logout",
  SIGNUP_GMAIL = "/auth/signup",
  SIGNUP_GOOGLE = "/auth/signup/google",
  FORGOT_PASSWORD = "/auth/forgot-password",
  VALIDATE_OTP = "/auth/validate-otp",

  // Related to the artist
  ARTIST = "/artists",

  // Related to the art-geek
  ART_GEEK = "/artgeeks",

  // Related to the art
  ARTS = "/arts",

  // Misc
  INFO = "/auth/info",
  CATEGORIES = "/general/categories",
  COMMENTS = "/comments",
  REPLY = "/reply",
}

/**
 * Related to the OTP verification
 */

export interface OTPVerificationType {
  email: string;
  otp: string;
}
