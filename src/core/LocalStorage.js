
class LocalStorage {

    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static get(key, defaultValue) {
        const saved = localStorage.getItem(key);

        return saved !== null ? JSON.parse(saved) : defaultValue;
    }

    static remove(key) {
        localStorage.removeItem(key);
    }

    static clear() {
        localStorage.clear();
    }

    static isEmpty() {
        return Object.keys(localStorage).length === 0;
    }
}

export default LocalStorage;