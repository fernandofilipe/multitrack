const token =
  "sl.BjerZD2nrr_Wh1eUK_-rAcM1_WSprwry1FCP1rM_cXVE03kp1CVD_Q2z5jj1YGdVTvmOTPySu44uxcYrME7RlNWxudPnumdC8RdDKKMPdMRWWRn36g2FuY6bRFNkK8-7PB-rvZqH7ZVEwxk";

const settings = {
  token: token,
  file: {
    path: "",
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
