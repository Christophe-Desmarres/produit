const produit = {
    fournisseur: "",
    lien: "",
    type_produit: "",
    nom: "",
    format_cm: "",
    nb_pages: 0,
    detail: "",
    tarif_ht: 0,
    tarif_ttc: 0,
    fdp: 0,
};

const liste_data = [
    ["fournisseur", "lien", "type_produit", "nom", "tarif_ht", "tarif_ttc", "fdp"],
    ["koylab", "<a>https:koylab.com/fr/produits/books/photo-books</a>", "album", "Photo Book", 40, 49.20, 16],
    ["matisseopro", "<a>https:www.matisseopro.com/Produits/LivreRubis</a>", "album", "rubis1", 38.50, 47.36, 9.49],
    ["matisseopro", "<a>https:www.matisseopro.com/Produits/LivreRubis</a>", "album", "rubis1", 38.50, 47.36, 9.49],
    ["floricolor", "<a>https:www.floricolor.pt/fr/puer-collection.html</a>", "album", "puer collection1", 41.55, 51.11, 16.91],
];

/**
["fournisseur", "lien", "type_produit", "nom", "format_cm", "nb_pages", "detail", "tarif_ht", "tarif_ttc", "fdp"],

["koylab", https:koylab.com/fr/produits/books/photo-books	album	Photo Book	20x20cm | 08x08in	"5 à 10 doubles - pages " 1	40,00 €	49,20 €	16,00 €], 
["koylab", https:koylab.com/fr/produits/books/kandid-books	album	Kandid Book	20x20cm | 08x08in	10 doubles-pages		1	45,00 €	55,35 €	16,00 €],
["koylab", https:koylab.com/fr/produits/books/mini-books	album	Mini Book	18x18cm | 07x07in (unit)	5 doubles-pages		1	14,00 €	17,22 €	16,00 €],


["matisseopro", https:www.matisseopro.com/Produits/LivreRubis	album	rubis	23x23cm	16		1	38,50 €	47,36 €	9,49 €],


["floricolor", https:www.floricolor.pt/fr/puer-collection.html	album	puer collection	25x25cm	16		1	41,55 €	51,11 €	16,91 €],
["floricolor", https:www.floricolor.pt/fr/story_collection.html	album	"STORY COLLECTION "	20x20	20		1	45,00 €	55,35 €	16,91 €], 
["floricolor", https:www.floricolor.pt/fr/books.html	album	PHOTOBOOK	20x20	20		1	49,00 60,27 €	16,91 €],
["floricolor", https:www.floricolor.pt/fr/boutiquebook.html	album	BOUTIQUE BOOK	20x20	20		1	55,00 €	67,65 €	16,91 €],
["floricolor",, https:www.floricolor.pt/pt/eco-collection-kids/fr.html	album	Eco Collection Kids	24x24	20	"Pure White 250g avec Vernis Brillant ou Vernis Mat +5€ Normal Binding + 5€ Matériaux Luxury + 10€ Embossage 1 lignes de texte + 15€ "	1	64,99 €	79,94 €	16,91 €], 
["floricolor" https:www.floricolor.pt/fr/kraft-book.html#view2	album	KRAFT BOOK	15x10	16	"multiple de 4 feuille supp +1€"	4	8,00 €	9,84 €	16,91 €],
["floricolor", https:www.floricolor.pt/fr/kraft-book.html#view2	album	KRAFT BOOK	29x20	16	"multiple de 2 feuille supp +2€"	2	18,00 €	22,14 €	16,91 €],


["Dreambookpro", https:fr.dreambookspro.com/album-basic	album	BASIC	20x20	24		1	29,40 €	36,16 €	15,00 €],
["Dreambookpro", https:fr.dreambookspro.com/livre-dor-basic	album	LIVRES D’OR	20x20	24		1	25,00 €	30,75 €	15,00 €],
["DreamBookPro", "JUNIOR CORAL | CORAL PHOTO | PERSICO " 1	39,40 €	48,46 €	10,00 €]


["saaldigital", https:www.saal-digital.fr/livre-photo/prix/	album	Livre photo	19x19	26		1		25,99 €	4,99 €],
["saaldigital", https:www.saal-digital.fr/livre-photo/prix/	album	Livre photo XT	19x19	16		1		45,29 €	4,99 €],
["saaldigital", https:www.saal-digital.fr/livre-photo/prix/	album	Livre photo Professional Line	21x21	26		1		69,99 €	4,99 €],
["saaldigital", https:www.saal-digital.fr/livre-photo/prix/	album	"Professional Line XT lin blanc cassé "	21x21	10		1		69,99 €	4,99 €], 


const zoomcab = []
["zoomcilab", https:www.zoomcilab.com/fr/albums#&gid=1577129481&pid=2	album	Livret Eco	20x20	4 doubles pages		1	14,20 €	17,47 €	16,00 €],
["zoomcilab", https:www.zoomcilab.com/fr/albums#&gid=1577129481&pid=3	album	Livret	20x20	8 doubles pages		1	33,00 €	40,59 €	16,00 €],
["zoomcilab", https:www.zoomcilab.com/fr/albums#&gid=1577129481&pid=5	album	livret Lux Plus	20x20	8 doubles pages		1	42,00 €	51,66 €	16,00 €],
["zoomcilab", https:www.zoomcilab.com/fr/albums#&gid=1577129481&pid=11	album	album couverture photo	20x20	8 doubles pages		1	65,00 €	79,95 €	16,00 €]
 */