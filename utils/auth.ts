import Cookies from "js-cookie";

export function isAuthenticated(): boolean {
  if (typeof window !== 'undefined') {
    const token = getToken();
    if (token) {
      return true;
    }
  }
  return false;
}

export function attachToken(http: any, token: string): any {
  http.interceptors.request.use(
    (config: any) => {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
  return http;
}

export function getAuthCredentials(): { token: string | null } {
  const token = getToken();
  if (token) {
    return { token };
  }
  return { token: null };
}

export function setToken(token: string): void {
  Cookies.set('token', token);
}

export function getToken(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  return Cookies.get('token');
}

export function removeToken(): void {
  Cookies.remove('token');
}

export function setUser(user: any): void {
  Cookies.set('user', JSON.stringify(user));
}

export function getUser(): any {
  const user = Cookies.get('user');
  return user ? JSON.parse(user) : {};
}
