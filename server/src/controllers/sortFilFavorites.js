
function sortFilFavorites(gender,direction,favorites) {
    const filtered = gender === "sinFiltros" ? favorites : favorites.filter(fav => fav.gender === gender)
    const sortedFavorites = direction === "A" ?
        filtered.sort((a, b) => a.id - b.id) :
        filtered.sort((a, b) => b.id - a.id);
    return sortedFavorites
}
module.exports=sortFilFavorites;
