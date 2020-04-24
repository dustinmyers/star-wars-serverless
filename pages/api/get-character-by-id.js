const fetch = require("node-fetch");

const images = [
  "https://boundingintocomics.com/files/2019/05/2019.05.15-06.10-boundingintocomics-5cdc56295fdf4.png",
  "https://img.cinemablend.com/filter:scale/quill/7/e/9/b/6/f/7e9b6f625b1f06b8c70fe19107bf62bc0f44b6eb.jpg?mw=600",
  "https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_feature.jpg",
  "https://s.yimg.com/ny/api/res/1.2/soTg5zMneth9YIQz0ae_cw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://images.fatherly.com/wp-content/uploads/2018/12/darthvader-header.jpg?q=65&amp;enable=upscale&amp;w=1200",
  "https://www2.pictures.zimbio.com/mp/oHGHV7BhCfvl.jpg",
  "https://i.ytimg.com/vi/5UW1PIplmlc/maxresdefault.jpg",
  "https://pm1.narvii.com/6293/db859b249381c30a6be8f8242046105e552cd54d_00.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=960",
  "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=960",
  "https://s.abcnews.com/images/Entertainment/ht_alec_guinness_obi_wan_kenobi_star_wars_jc_160415_16x9_992.jpg",
];
const fetchCharacter = async (id) => {
  const res = await fetch(`https://swapi.py4e.com/api/people/${id}`);
  const data = await res.json();
  return data;
};

export default async (req, res) => {
  const { id } = req.query;
  if (!id) {
    res
      .status(400)
      .json({ error: "No id sent - add a query param for the id" });
  }

  try {
    const character = await fetchCharacter(id).catch(console.error);
    character.thumbnail = images[id - 1];
    res.status(200).send({ character });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error });
  }
};
