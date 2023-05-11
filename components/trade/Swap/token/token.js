import token from "./tokens.json";

export function tokenList(search = "") {
    var tokenList = [];
    var searchingAddress = false;
    const lowerSearchParts = search
        .toLowerCase()
        .split(/\s+/)
        .filter((s) => s.length > 0);

    const matchesSearch = (s) => {
        const sParts = s
            .toLowerCase()
            .split(/\s+/)
            .filter((s_) => s_.length > 0);

        return lowerSearchParts.every(
            (p) =>
                p.length === 0 ||
                sParts.some((sp) => sp.startsWith(p) || sp.endsWith(p))
        );
    };

    if (search !== "" && searchingAddress) {
        return token.filter((token) => token.address === search);
    }
    if (search !== "") {
        return token.filter((token) => {
            const { symbol, name, address } = token;
            return (
                (symbol && matchesSearch(symbol)) ||
                (name && matchesSearch(name)) ||
                (address && matchesSearch(address))
            );
        });
    } else {
        for (var i = 0; i < 10; i++) {
            tokenList.push(token[i]);
        }
        return tokenList;
    }
}
