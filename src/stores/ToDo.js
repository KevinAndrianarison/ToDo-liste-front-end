import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useUrl } from "./Url";
import { useMessages } from "./Messages";

export const useToDo = defineStore("ToDo", () => {
  const tabTasks = ref([]);
  const URL = useUrl().url;
  const Messages = useMessages();

  const titre = ref("");
  const commentaire = ref("");
  const status = ref(true);
  const date = ref(null);
  const titreModif = ref("");
  const commentaireModif = ref("");
  const dateModif = ref(null);
  const idModif = ref("");
  const openModal = ref(false);
  const Search = ref(null);

  function getAlltasks() {
    axios
      .get(`${URL}/api/todo`)
      .then((response) => {
        tabTasks.value = response.data;
      })
      .catch((error) => {
        console.error("Erreur du GET All :", error);
      });
  }

  /// FONCTION RECHERCHE
  function filtrer(Search) {
    return tabTasks.value.filter((task) => {
      return task.nom_candidat.match(Search);
    });
  }

  /// FONCTION AFFICHAGE MODALE
  function affichage(id) {
    openModal.value = true;
    axios
      .get(`${URL}/api/todo/${id}`)
      .then((response) => {
        titreModif.value = response.data.titre;
        commentaireModif.value = response.data.commentaire;
        dateModif.value = response.data.date;
        idModif.value = response.data._id;
      })
      .catch((error) => {
        console.error("Erreur de GET one :", error);
      });
  }

  /// FONCTION MODIFIER UNE TACHE
  function Modifier() {
    const formData = {
      id: idModif.value,
      titre: titreModif.value,
      commentaire: commentaireModif.value,
      status: status.value,
      date: dateModif.value,
    };
    axios
      .put(`${URL}/api/todo/${idModif.value}`, formData)
      .then((response) => {
        Messages.messageSucces = response.data.message;
        setTimeout(() => {
          Messages.messageSucces = "";
        }, 3000);
        getAlltasks();
      })
      .catch((error) => {
        console.error("Erreur de POST : ", error);
        Messages.messageError = "Erreur de modification !";
        setTimeout(() => {
          Messages.messageError = "";
        }, 3000);
      });
    openModal.value = false;
    Search.value = null;
  }

  /// FONCTION ANNULLER
  function anuller() {
    openModal.value = false;
  }

  /// FONCTION AJOUTER
  function valider() {
    const formData = {
      titre: titre.value,
      commentaire: commentaire.value,
      status: status.value,
      date: date.value,
    };
    axios
      .post(`${URL}/api/todo/post`, formData)
      .then((response) => {
        Messages.messageSucces = response.data.message;
        setTimeout(() => {
          Messages.messageSucces = "";
        }, 3000);
        getAlltasks();
      })
      .catch((error) => {
        console.error("Erreur de POST : ", error);
        Messages.messageError = "Erreur d'Ajout !";
        setTimeout(() => {
          Messages.messageError = "";
        }, 3000);
      });
    titre.value = "";
    commentaire.value = "";
    date.value = null;
  }

  /// Changer StyleCSS
  function toggleColor(id, s) {
    const status = Boolean(!s);
    axios
      .put(`${URL}/api/todo/status/${id}/${status}`)
      .then(() => {
        getAlltasks();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /// FONCTION SUPPRIMER
  function suppr(id) {
    axios
      .delete(`${URL}/api/todo/${id}`)
      .then((response) => {
        Messages.messageSucces = response.data.message;
        setTimeout(() => {
          Messages.messageSucces = "";
        }, 3000);
        getAlltasks();
      })
      .catch((error) => {
        console.error("ERROR DELETE One :", error);
        Messages.messageError = "Erreur de Suppression !";
        setTimeout(() => {
          Messages.messageError = "";
        }, 3000);
      });
  }

  return {
    tabTasks,
    titre,
    commentaire,
    status,
    date,
    titreModif,
    commentaireModif,
    dateModif,
    idModif,
    openModal,
    Search,
    filtrer,
    affichage,
    Modifier,
    anuller,
    valider,
    suppr,
    getAlltasks,
    toggleColor,
  };
});
