class apiInteractor {
  getData = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    
    const result = await response.json();
    return result;
  }
}

export default new apiInteractor();