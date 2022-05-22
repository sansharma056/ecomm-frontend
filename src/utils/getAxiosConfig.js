export function getAxiosConfig(token) {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
}
