class FileHelper {
    static gener8(info) {
        return new File(...info.toUpperCase().split('/'));
    }
}