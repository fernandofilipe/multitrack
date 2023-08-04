

const settings = {
  token: token,
  file: {
    path: "./output/",
    name: "multitrack",
  },
  csv: {
    delimiter: ";",
    message: {
      start: "Salvando em CSV...",
      finish: "CSV Salvo!",
    },
  },
  song: {
    delimiter: " - ",
  },
  dropbox: {
    limit: 1000, //número de itens retornados pela API
    path: "",
  },
  general: {
    message: {
      start: "Obtendo arquivos do Dropbox.",
      finish: "Finalizado!",
    },
    folder: {
      delimiter: "/",
    },
  },
};

module.exports = settings;
