const search = {


    init: function () {

        //ajout listener sur le bouton submit du 'form'
        let button = document.querySelector("input[value='Submit']");
        button.addEventListener('click', search.confirm);

    },

    //fct pour confirmation du clic et on recupere la valeur de l'option selectionné
    confirm: function (e) {
        e.preventDefault();
        let valueToSearch = document.querySelector("select");
        search.afficheCoice(valueToSearch.value)
    },

    //fct qui recherche l'élément selectionné et renvoie une liste pour affichage et selection plus précise
    afficheCoice: function (valueToSearch) {
        console.log(valueToSearch);

        let index = 0;
        //recherche de l'index à chercher dans chaque tableau
        for (i = 0; liste_data[0][i] != valueToSearch && i < liste_data[0].length; i++) {
            index++;
            console.log(index);
            console.log(liste_data[0][index]);
        }


        let tabValue = [liste_data[0][index]];
        if (tabValue == valueToSearch) {

            let blocAffichage = document.querySelector("#affichage");

            //commence à 1 pour éviter d'afficher les labels
            for (i = 1; i < liste_data.length; i++) {
                // for (const productList of liste_data) {
                if (liste_data[i][index] == tabValue) {}
                let newElement = document.createElement('li');
                let newLabel = document.createElement('label');
                //let newInput = document.createElement('input');

                newLabel.setAttribute('for', liste_data[i][index]);
                newLabel.innerHTML = liste_data[i][index];
                newLabel.classList.add('listeFind');
                newLabel.setAttribute("data-index", i);

                //newInput.setAttribute('name',liste_data[i][index]);
                //newInput.setAttribute('type',"checkbox");
                //newInput.innerHTML = liste_data[i][index];
                //newInput.addEventListener('checked', search.showMeTab);
                // newLabel.innerHTML = '<label for=' + liste_data[i][index] + '>' + liste_data[i][index] + '</label>';
                // newInput.innerHTML = '<input type="checkbox" name=' + liste_data[i][index] + ">";
                newElement.classList.add('cards');
                newElement.prepend(newLabel);
                //newElement.prepend(newInput);
                newElement.addEventListener('click', search.showMeTab);
                blocAffichage.append(newElement);

            }
        } else {
            console.log('valeur non trouvée');
        }



    },

    showMeTab: function (e) {
        e.preventDefault();
        let element = e.currentTarget;
        console.log(element);
        //let valeur = element.getAttribute("data-index");
        //let element = document.querySelector('label[data-index="' + indexTab + '"]');
        let cible = element.querySelector('label');
        console.log(cible);
        let indexTab = cible.dataset.index;
        console.log(indexTab);

        //const index = element.getAttribute("data-index");
        // let valeur = index.value;
        let blocResultat = document.querySelector("#resultat");


        for (i = 0; i < liste_data[0].length; i++) {
            let newElement = document.createElement('li');
            newElement.innerHTML = liste_data[0][i] + " = " + liste_data[indexTab][i];
            blocResultat.append(newElement);
        }





    }




}

document.addEventListener('DOMContentLoaded', search.init);
console.log();