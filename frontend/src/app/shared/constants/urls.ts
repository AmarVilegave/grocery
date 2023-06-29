const BASE_URL = 'http://localhost:8088';

export const CATEGORIES_URL = BASE_URL + '/api/categories';
export const CATEGORY_BY_ID_URL = CATEGORIES_URL + '/';
export const CATEGORIES_BY_SEARCH_URL = CATEGORIES_URL + '/search/';
export const PRODUCTS_URL = BASE_URL + '/api/products';
export const PRODUCT_BY_ID_URL = PRODUCTS_URL + '/';
export const PRODUCT_BY_CATEGORY_URL = PRODUCTS_URL + '/';
export const PRODUCT_BY_TAG_URL = PRODUCTS_URL + '/';
export const USER_URL = BASE_URL + '/api/users';
export const USER_BY_ID_URL = USER_URL + '/';
export const USER_FAVORITE_URL = USER_URL + '/favorite/';
export const ADMIN_URL = BASE_URL + '/api/admin';
export const ADMIN_URL_BY_ID_URL = ADMIN_URL + '/';
export const LOGIN_URL = BASE_URL + '/api/login';
export const ADMIN_LOGIN_URL = LOGIN_URL + '/admin-login';
