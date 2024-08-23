import { useState, useEffect } from "react";

export const useFetch = (url) => { // la url simepre debe de ir para redireccionar 
  const [data,/*se modifica con set data, osea que se le agrega el valor por set data*/setData /* por medio de este medio modifico el valor de data */] = useState(null); // usestate valor inicial de la variable que puedo ser cambiada
  //console.log(data)si  quiero mostrar el contendio siempre es por el primero por el de la izquierda, por eso data 
  const [error, setError] = useState(null); // srive para identificar errorres 
  const [loading, setLoading] = useState(false);

  useEffect(() => { // para eventos que se ejecuten con una accion del usuario 
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);

        if (!res.ok) {
          let err = new Error("Error en la peticion fetch");
          err.status = res.status || "00";
          err.statusText = err.statusText || "Hubo un error";
          throw err;
        }

        const json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};