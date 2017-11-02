import { Link } from './Link.interface';
import { Logo } from './Logo.interface';

export interface Startup {
    name: string;
    tagLine?: string;
    description?: string;
    logo?: Logo;
    socialLinks?: Link [];
}
