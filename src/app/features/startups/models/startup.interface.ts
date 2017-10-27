import { Link } from './Link.interface';

export interface Startup {
    name: string;
    tagLine?: string;
    description?: string;
    logo?: string;
    socialLinks?: Link [];
}
