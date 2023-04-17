import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface ModelResponse<T> {
  count: number;
  results: T[];
}

const useModel = <T>(endpoint: string) => {
  const [model, setModel] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const controller = new AbortController();

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<ModelResponse<T>>(endpoint)
      .then((res) => {
        setModel(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { model, error, isLoading };
};

export default useModel;
