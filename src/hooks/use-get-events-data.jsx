import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => {
	return axios.get("https://public-api.wordpress.com/wp/v2/sites/mariam806.wordpress.com/posts");
};

export const useGetEventsData = (onSuccess, onError) => {
	return useQuery("events", fetchData);
};
