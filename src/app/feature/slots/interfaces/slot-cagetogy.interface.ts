export interface SlotCategoryrResponse {
  data: SlotCategory[];
}

export interface SlotCategory {
  type: string;
  category: string;
  group?: string;
  name: string;
  active?: boolean;
  background?: string;
  icon?: string;
  multiLangName?: MultiLangName;
  order: number;
  onlyLargeImages?: boolean;
  initialRowCount?: number;
  games: SlotGame[];
  totalGames: number;
  platform?: 'desktop' | 'mobile' | 'all';
  provider?: string;
}

export interface SlotGame {
  tags: string[];
  order: number;
  url: string;
  image: string;
  providerName: string;
  provider: string;
  name: string;
  game_id: string;
  imageSet?: ImageSet;
  favoriteCount: number;
  gameId: string;
  image2: string;
  hasLargeImage: boolean;
  stats?: any[];
  group_name?: string | null;
  remoteId?: string;
  platform?: string;
}

interface ImageSet {
  blurhash: null | string;
  original: string;
  webp: string;
}

interface MultiLangName {
  ka: string;
  en: string;
  ru: string;
  tr: string;
}
