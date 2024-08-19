import { createStore } from 'vuex'
import { firebaseApp } from "../firebaseConfig";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'

export default createStore({
  state: {
    usuarios: []
  },
  getters: {
  },
  mutations: {
    SET_USUARIOS(state, usuarios){
      state.usuarios = usuarios;
    }
  },
  actions: {
    async setUsuarios({commit}){
      let usuariosRecibidos = [];
      try {
        //obtener instancia de firebase
        let db = getFirestore(firebaseApp);
        //referenciar coleccion a escuchar (usuarios)
        let usuariosRef = collection(db, 'usuarios')
        //para escuchar cambios en tiempo real
        onSnapshot(usuariosRef, (snapshot) =>{
          usuariosRecibidos = snapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data() //extraer datos del documento
          }))
          commit('SET_USUARIOS', usuariosRecibidos)
        })
      }catch (error){
        console.log(error);
      }
    },
    
    async agregarUsuarios(context, usuario){
      try{
        let db = getFirestore(firebaseApp);
        let usuariosRef = collection(db, 'usuarios')
        await addDoc(usuariosRef, usuario)
      } catch (error) {
        console.log(error)

      }
    },

    async eliminarUsuarios(context, idUsuario){
      try {
        let db = getFirestore(firebaseApp);
        let usuariosRef = doc(db, 'usuarios', idUsuario)
        await deleteDoc(usuariosRef)
      }catch (error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
