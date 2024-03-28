function NavBar({handleClickPrecedent, handleClickSuivant, pokemonIndex, pokemonList }){
    
    return(
        <>
    {pokemonIndex > 0 ? <button onClick={handleClickPrecedent}>Précédent</button> : undefined}
    {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickSuivant}>Suivant</button> : undefined}
    </>
);}


export default NavBar;