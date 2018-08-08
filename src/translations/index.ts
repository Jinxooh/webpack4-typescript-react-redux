import { addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as ja from 'react-intl/locale-data/ja';
import * as ko from 'react-intl/locale-data/ko';
import locale from './locale';

addLocaleData([...en, ...ja, ...ko]);

export default locale;
