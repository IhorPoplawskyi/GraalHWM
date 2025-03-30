export const generateMap = () => {
  const data = [];
  const openClosed = [true, false]
  for (let i = 0; i < 225; i++) {
    data.push({id: i, closed: openClosed[Math.floor(Math.random() * openClosed.length)]})
  }

  return data;
}

export const firstGraal = {id: 1, date: '27.03.2025', data: [
  {
      "id": 0,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 1,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 2,
      "prize": "",
      "closed": true
  },
  {
      "id": 3,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 4,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 5,
      "prize": "",
      "closed": true
  },
  {
      "id": 6,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 7,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 8,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 9,
      "prize": "",
      "closed": true
  },
  {
      "id": 10,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 11,
      "prize": "",
      "closed": false
  },
  {
      "id": 12,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 13,
      "prize": "",
      "closed": false
  },
  {
      "id": 14,
      "prize": "",
      "closed": true
  },
  {
      "id": 15,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 16,
      "prize": "",
      "closed": false
  },
  {
      "id": 17,
      "prize": "",
      "closed": false
  },
  {
      "id": 18,
      "prize": "",
      "closed": false
  },
  {
      "id": 19,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 20,
      "prize": "",
      "closed": false
  },
  {
      "id": 21,
      "prize": "",
      "closed": true
  },
  {
      "id": 22,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 23,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 24,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 25,
      "prize": "",
      "closed": true
  },
  {
      "id": 26,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 27,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 28,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 29,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 30,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 31,
      "prize": "",
      "closed": false
  },
  {
      "id": 32,
      "prize": "",
      "closed": true
  },
  {
      "id": 33,
      "prize": "",
      "closed": false
  },
  {
      "id": 34,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 35,
      "prize": "",
      "closed": false
  },
  {
      "id": 36,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 37,
      "prize": "",
      "closed": false
  },
  {
      "id": 38,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 39,
      "prize": "",
      "closed": true
  },
  {
      "id": 40,
      "prize": "",
      "closed": false
  },
  {
      "id": 41,
      "prize": "",
      "closed": false
  },
  {
      "id": 42,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 43,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 44,
      "prize": "",
      "closed": false
  },
  {
      "id": 45,
      "prize": "",
      "closed": false
  },
  {
      "id": 46,
      "prize": "",
      "closed": true
  },
  {
      "id": 47,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 48,
      "prize": "",
      "closed": false
  },
  {
      "id": 49,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 50,
      "prize": "",
      "closed": true
  },
  {
      "id": 51,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 52,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 53,
      "prize": "",
      "closed": false
  },
  {
      "id": 54,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 55,
      "prize": "",
      "closed": false
  },
  {
      "id": 56,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 57,
      "prize": "",
      "closed": false
  },
  {
      "id": 58,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 59,
      "prize": "",
      "closed": true
  },
  {
      "id": 60,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 61,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 62,
      "prize": "",
      "closed": false
  },
  {
      "id": 63,
      "prize": "",
      "closed": false
  },
  {
      "id": 64,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 65,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 66,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 67,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 68,
      "prize": "",
      "closed": true
  },
  {
      "id": 69,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 70,
      "prize": "",
      "closed": false
  },
  {
      "id": 71,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 72,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 73,
      "prize": "",
      "closed": true
  },
  {
      "id": 74,
      "prize": "",
      "closed": false
  },
  {
      "id": 75,
      "prize": "",
      "closed": false
  },
  {
      "id": 76,
      "prize": "",
      "closed": true
  },
  {
      "id": 77,
      "prize": "",
      "closed": false
  },
  {
      "id": 78,
      "prize": "",
      "closed": true
  },
  {
      "id": 79,
      "prize": "",
      "closed": false
  },
  {
      "id": 80,
      "prize": "",
      "closed": false
  },
  {
      "id": 81,
      "prize": "",
      "closed": true
  },
  {
      "id": 82,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 83,
      "prize": "",
      "closed": true
  },
  {
      "id": 84,
      "prize": "",
      "closed": false
  },
  {
      "id": 85,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 86,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 87,
      "prize": "",
      "closed": false
  },
  {
      "id": 88,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 89,
      "prize": "",
      "closed": true
  },
  {
      "id": 90,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 91,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 92,
      "prize": "",
      "closed": true
  },
  {
      "id": 93,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 94,
      "prize": "",
      "closed": true
  },
  {
      "id": 95,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 96,
      "prize": "",
      "closed": true
  },
  {
      "id": 97,
      "prize": "",
      "closed": false
  },
  {
      "id": 98,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 99,
      "prize": "",
      "closed": false
  },
  {
      "id": 100,
      "prize": "",
      "closed": true
  },
  {
      "id": 101,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 102,
      "prize": "",
      "closed": false
  },
  {
      "id": 103,
      "prize": "",
      "closed": true
  },
  {
      "id": 104,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 105,
      "prize": "",
      "closed": false
  },
  {
      "id": 106,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 107,
      "prize": "",
      "closed": false
  },
  {
      "id": 108,
      "prize": "",
      "closed": true
  },
  {
      "id": 109,
      "prize": "",
      "closed": false
  },
  {
      "id": 110,
      "prize": "",
      "closed": false
  },
  {
      "id": 111,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 112,
      "prize": "",
      "closed": false
  },
  {
      "id": 113,
      "prize": "",
      "closed": true
  },
  {
      "id": 114,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 115,
      "prize": "",
      "closed": true
  },
  {
      "id": 116,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 117,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 118,
      "prize": "",
      "closed": true
  },
  {
      "id": 119,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 120,
      "prize": "",
      "closed": true
  },
  {
      "id": 121,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 122,
      "prize": "",
      "closed": false
  },
  {
      "id": 123,
      "prize": "",
      "closed": false
  },
  {
      "id": 124,
      "prize": "",
      "closed": true
  },
  {
      "id": 125,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 126,
      "prize": "",
      "closed": false
  },
  {
      "id": 127,
      "prize": "",
      "closed": true
  },
  {
      "id": 128,
      "prize": "",
      "closed": false
  },
  {
      "id": 129,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 130,
      "prize": "",
      "closed": false
  },
  {
      "id": 131,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 132,
      "prize": "",
      "closed": true
  },
  {
      "id": 133,
      "prize": "",
      "closed": false
  },
  {
      "id": 134,
      "prize": "",
      "closed": false
  },
  {
      "id": 135,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 136,
      "prize": "",
      "closed": false
  },
  {
      "id": 137,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 138,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 139,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 140,
      "prize": "",
      "closed": false
  },
  {
      "id": 141,
      "prize": "",
      "closed": false
  },
  {
      "id": 142,
      "prize": "",
      "closed": false
  },
  {
      "id": 143,
      "prize": "",
      "closed": true
  },
  {
      "id": 144,
      "prize": "",
      "closed": false
  },
  {
      "id": 145,
      "prize": "",
      "closed": true
  },
  {
      "id": 146,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 147,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 148,
      "prize": "",
      "closed": true
  },
  {
      "id": 149,
      "prize": "",
      "closed": false
  },
  {
      "id": 150,
      "prize": "",
      "closed": true
  },
  {
      "id": 151,
      "prize": "",
      "closed": false
  },
  {
      "id": 152,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 153,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 154,
      "prize": "",
      "closed": true
  },
  {
      "id": 155,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 156,
      "prize": "",
      "closed": false
  },
  {
      "id": 157,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 158,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 159,
      "prize": "",
      "closed": false
  },
  {
      "id": 160,
      "prize": "",
      "closed": true
  },
  {
      "id": 161,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 162,
      "prize": "",
      "closed": true
  },
  {
      "id": 163,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 164,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 165,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 166,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 167,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 168,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 169,
      "prize": "",
      "closed": false
  },
  {
      "id": 170,
      "prize": "",
      "closed": false
  },
  {
      "id": 171,
      "prize": "",
      "closed": false
  },
  {
      "id": 172,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 173,
      "prize": "",
      "closed": false
  },
  {
      "id": 174,
      "prize": "",
      "closed": true
  },
  {
      "id": 175,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 176,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 177,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 178,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 179,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 180,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 181,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 182,
      "prize": "",
      "closed": false
  },
  {
      "id": 183,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 184,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 185,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 186,
      "prize": "",
      "closed": false
  },
  {
      "id": 187,
      "prize": "",
      "closed": false
  },
  {
      "id": 188,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 189,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 190,
      "prize": "",
      "closed": false
  },
  {
      "id": 191,
      "prize": "",
      "closed": true
  },
  {
      "id": 192,
      "prize": "",
      "closed": true
  },
  {
      "id": 193,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 194,
      "prize": "",
      "closed": false
  },
  {
      "id": 195,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 196,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 197,
      "prize": "",
      "closed": true
  },
  {
      "id": 198,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 199,
      "prize": "",
      "closed": true
  },
  {
      "id": 200,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 201,
      "prize": "",
      "closed": true
  },
  {
      "id": 202,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 203,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 204,
      "prize": "",
      "closed": false
  },
  {
      "id": 205,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 206,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 207,
      "prize": "",
      "closed": true
  },
  {
      "id": 208,
      "prize": "",
      "closed": true
  },
  {
      "id": 209,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 210,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 211,
      "prize": "Золото",
      "closed": true
  },
  {
      "id": 212,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 213,
      "prize": "",
      "closed": false
  },
  {
      "id": 214,
      "prize": "",
      "closed": false
  },
  {
      "id": 215,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 216,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 217,
      "prize": "Золото",
      "closed": false
  },
  {
      "id": 218,
      "prize": "",
      "closed": false
  },
  {
      "id": 219,
      "prize": "",
      "closed": false
  },
  {
      "id": 220,
      "prize": "",
      "closed": false
  },
  {
      "id": 221,
      "prize": "",
      "closed": false
  },
  {
      "id": 222,
      "prize": "",
      "closed": false
  },
  {
      "id": 223,
      "prize": "",
      "closed": false
  },
  {
      "id": 224,
      "prize": "Золото",
      "closed": false
  }
]} 

export const secondGraal = {
  id: 2,
  date: "22.04.2025",
  data: [
    {
        "id": 0,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 1,
        "prize": "",
        "closed": false
    },
    {
        "id": 2,
        "prize": "",
        "closed": false
    },
    {
        "id": 3,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 4,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 5,
        "prize": "",
        "closed": true
    },
    {
        "id": 6,
        "prize": "",
        "closed": false
    },
    {
        "id": 7,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 8,
        "prize": "",
        "closed": true
    },
    {
        "id": 9,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 10,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 11,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 12,
        "prize": "",
        "closed": false
    },
    {
        "id": 13,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 14,
        "prize": "",
        "closed": true
    },
    {
        "id": 15,
        "prize": "",
        "closed": true
    },
    {
        "id": 16,
        "prize": "",
        "closed": true
    },
    {
        "id": 17,
        "prize": "",
        "closed": true
    },
    {
        "id": 18,
        "prize": "",
        "closed": false
    },
    {
        "id": 19,
        "prize": "",
        "closed": false
    },
    {
        "id": 20,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 21,
        "prize": "",
        "closed": true
    },
    {
        "id": 22,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 23,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 24,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 25,
        "prize": "",
        "closed": false
    },
    {
        "id": 26,
        "prize": "",
        "closed": false
    },
    {
        "id": 27,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 28,
        "prize": "",
        "closed": false
    },
    {
        "id": 29,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 30,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 31,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 32,
        "prize": "",
        "closed": false
    },
    {
        "id": 33,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 34,
        "prize": "",
        "closed": false
    },
    {
        "id": 35,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 36,
        "prize": "",
        "closed": true
    },
    {
        "id": 37,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 38,
        "prize": "",
        "closed": false
    },
    {
        "id": 39,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 40,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 41,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 42,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 43,
        "prize": "",
        "closed": false
    },
    {
        "id": 44,
        "prize": "",
        "closed": true
    },
    {
        "id": 45,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 46,
        "prize": "",
        "closed": true
    },
    {
        "id": 47,
        "prize": "",
        "closed": true
    },
    {
        "id": 48,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 49,
        "prize": "",
        "closed": true
    },
    {
        "id": 50,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 51,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 52,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 53,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 54,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 55,
        "prize": "",
        "closed": true
    },
    {
        "id": 56,
        "prize": "",
        "closed": true
    },
    {
        "id": 57,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 58,
        "prize": "",
        "closed": true
    },
    {
        "id": 59,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 60,
        "prize": "",
        "closed": true
    },
    {
        "id": 61,
        "prize": "",
        "closed": false
    },
    {
        "id": 62,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 63,
        "prize": "",
        "closed": true
    },
    {
        "id": 64,
        "prize": "",
        "closed": false
    },
    {
        "id": 65,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 66,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 67,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 68,
        "prize": "",
        "closed": true
    },
    {
        "id": 69,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 70,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 71,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 72,
        "prize": "",
        "closed": true
    },
    {
        "id": 73,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 74,
        "prize": "",
        "closed": true
    },
    {
        "id": 75,
        "prize": "",
        "closed": false
    },
    {
        "id": 76,
        "prize": "",
        "closed": false
    },
    {
        "id": 77,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 78,
        "prize": "",
        "closed": true
    },
    {
        "id": 79,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 80,
        "prize": "",
        "closed": true
    },
    {
        "id": 81,
        "prize": "",
        "closed": true
    },
    {
        "id": 82,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 83,
        "prize": "",
        "closed": false
    },
    {
        "id": 84,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 85,
        "prize": "",
        "closed": true
    },
    {
        "id": 86,
        "prize": "",
        "closed": false
    },
    {
        "id": 87,
        "prize": "",
        "closed": false
    },
    {
        "id": 88,
        "prize": "",
        "closed": false
    },
    {
        "id": 89,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 90,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 91,
        "prize": "",
        "closed": true
    },
    {
        "id": 92,
        "prize": "",
        "closed": false
    },
    {
        "id": 93,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 94,
        "prize": "",
        "closed": true
    },
    {
        "id": 95,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 96,
        "prize": "",
        "closed": true
    },
    {
        "id": 97,
        "prize": "",
        "closed": true
    },
    {
        "id": 98,
        "prize": "",
        "closed": false
    },
    {
        "id": 99,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 100,
        "prize": "",
        "closed": true
    },
    {
        "id": 101,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 102,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 103,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 104,
        "prize": "",
        "closed": true
    },
    {
        "id": 105,
        "prize": "",
        "closed": false
    },
    {
        "id": 106,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 107,
        "prize": "",
        "closed": true
    },
    {
        "id": 108,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 109,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 110,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 111,
        "prize": "",
        "closed": true
    },
    {
        "id": 112,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 113,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 114,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 115,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 116,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 117,
        "prize": "",
        "closed": false
    },
    {
        "id": 118,
        "prize": "",
        "closed": true
    },
    {
        "id": 119,
        "prize": "",
        "closed": true
    },
    {
        "id": 120,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 121,
        "prize": "",
        "closed": false
    },
    {
        "id": 122,
        "prize": "",
        "closed": false
    },
    {
        "id": 123,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 124,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 125,
        "prize": "",
        "closed": true
    },
    {
        "id": 126,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 127,
        "prize": "",
        "closed": true
    },
    {
        "id": 128,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 129,
        "prize": "",
        "closed": false
    },
    {
        "id": 130,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 131,
        "prize": "",
        "closed": false
    },
    {
        "id": 132,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 133,
        "prize": "",
        "closed": true
    },
    {
        "id": 134,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 135,
        "prize": "",
        "closed": true
    },
    {
        "id": 136,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 137,
        "prize": "",
        "closed": true
    },
    {
        "id": 138,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 139,
        "prize": "",
        "closed": false
    },
    {
        "id": 140,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 141,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 142,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 143,
        "prize": "",
        "closed": false
    },
    {
        "id": 144,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 145,
        "prize": "",
        "closed": true
    },
    {
        "id": 146,
        "prize": "",
        "closed": true
    },
    {
        "id": 147,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 148,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 149,
        "prize": "",
        "closed": false
    },
    {
        "id": 150,
        "prize": "",
        "closed": false
    },
    {
        "id": 151,
        "prize": "",
        "closed": false
    },
    {
        "id": 152,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 153,
        "prize": "",
        "closed": true
    },
    {
        "id": 154,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 155,
        "prize": "",
        "closed": false
    },
    {
        "id": 156,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 157,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 158,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 159,
        "prize": "",
        "closed": true
    },
    {
        "id": 160,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 161,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 162,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 163,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 164,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 165,
        "prize": "",
        "closed": true
    },
    {
        "id": 166,
        "prize": "",
        "closed": true
    },
    {
        "id": 167,
        "prize": "",
        "closed": true
    },
    {
        "id": 168,
        "prize": "",
        "closed": false
    },
    {
        "id": 169,
        "prize": "",
        "closed": true
    },
    {
        "id": 170,
        "prize": "",
        "closed": true
    },
    {
        "id": 171,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 172,
        "prize": "",
        "closed": false
    },
    {
        "id": 173,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 174,
        "prize": "",
        "closed": false
    },
    {
        "id": 175,
        "prize": "",
        "closed": false
    },
    {
        "id": 176,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 177,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 178,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 179,
        "prize": "",
        "closed": false
    },
    {
        "id": 180,
        "prize": "",
        "closed": false
    },
    {
        "id": 181,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 182,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 183,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 184,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 185,
        "prize": "",
        "closed": false
    },
    {
        "id": 186,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 187,
        "prize": "",
        "closed": false
    },
    {
        "id": 188,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 189,
        "prize": "",
        "closed": true
    },
    {
        "id": 190,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 191,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 192,
        "prize": "",
        "closed": true
    },
    {
        "id": 193,
        "prize": "",
        "closed": true
    },
    {
        "id": 194,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 195,
        "prize": "",
        "closed": false
    },
    {
        "id": 196,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 197,
        "prize": "",
        "closed": true
    },
    {
        "id": 198,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 199,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 200,
        "prize": "",
        "closed": true
    },
    {
        "id": 201,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 202,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 203,
        "prize": "",
        "closed": false
    },
    {
        "id": 204,
        "prize": "",
        "closed": false
    },
    {
        "id": 205,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 206,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 207,
        "prize": "",
        "closed": true
    },
    {
        "id": 208,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 209,
        "prize": "",
        "closed": true
    },
    {
        "id": 210,
        "prize": "",
        "closed": true
    },
    {
        "id": 211,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 212,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 213,
        "prize": "",
        "closed": true
    },
    {
        "id": 214,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 215,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 216,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 217,
        "prize": "",
        "closed": true
    },
    {
        "id": 218,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 219,
        "prize": "",
        "closed": true
    },
    {
        "id": 220,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 221,
        "prize": "",
        "closed": false
    },
    {
        "id": 222,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 223,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 224,
        "prize": "",
        "closed": true
    }
],
}; 

export const thirdGraal = {
  id: 3,
  date: '05.06.2026',
  data: [
    {
        "id": 0,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 1,
        "prize": "",
        "closed": true
    },
    {
        "id": 2,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 3,
        "prize": "",
        "closed": true
    },
    {
        "id": 4,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 5,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 6,
        "prize": "",
        "closed": false
    },
    {
        "id": 7,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 8,
        "prize": "",
        "closed": true
    },
    {
        "id": 9,
        "prize": "",
        "closed": false
    },
    {
        "id": 10,
        "prize": "",
        "closed": true
    },
    {
        "id": 11,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 12,
        "prize": "",
        "closed": false
    },
    {
        "id": 13,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 14,
        "prize": "",
        "closed": true
    },
    {
        "id": 15,
        "prize": "",
        "closed": true
    },
    {
        "id": 16,
        "prize": "",
        "closed": false
    },
    {
        "id": 17,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 18,
        "prize": "",
        "closed": true
    },
    {
        "id": 19,
        "prize": "",
        "closed": false
    },
    {
        "id": 20,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 21,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 22,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 23,
        "prize": "",
        "closed": true
    },
    {
        "id": 24,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 25,
        "prize": "",
        "closed": false
    },
    {
        "id": 26,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 27,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 28,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 29,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 30,
        "prize": "",
        "closed": false
    },
    {
        "id": 31,
        "prize": "",
        "closed": true
    },
    {
        "id": 32,
        "prize": "",
        "closed": false
    },
    {
        "id": 33,
        "prize": "",
        "closed": false
    },
    {
        "id": 34,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 35,
        "prize": "",
        "closed": true
    },
    {
        "id": 36,
        "prize": "",
        "closed": false
    },
    {
        "id": 37,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 38,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 39,
        "prize": "",
        "closed": true
    },
    {
        "id": 40,
        "prize": "",
        "closed": true
    },
    {
        "id": 41,
        "prize": "",
        "closed": true
    },
    {
        "id": 42,
        "prize": "",
        "closed": true
    },
    {
        "id": 43,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 44,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 45,
        "prize": "",
        "closed": true
    },
    {
        "id": 46,
        "prize": "",
        "closed": false
    },
    {
        "id": 47,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 48,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 49,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 50,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 51,
        "prize": "",
        "closed": true
    },
    {
        "id": 52,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 53,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 54,
        "prize": "",
        "closed": true
    },
    {
        "id": 55,
        "prize": "",
        "closed": false
    },
    {
        "id": 56,
        "prize": "",
        "closed": true
    },
    {
        "id": 57,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 58,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 59,
        "prize": "",
        "closed": false
    },
    {
        "id": 60,
        "prize": "",
        "closed": false
    },
    {
        "id": 61,
        "prize": "",
        "closed": true
    },
    {
        "id": 62,
        "prize": "",
        "closed": false
    },
    {
        "id": 63,
        "prize": "",
        "closed": true
    },
    {
        "id": 64,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 65,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 66,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 67,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 68,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 69,
        "prize": "",
        "closed": false
    },
    {
        "id": 70,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 71,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 72,
        "prize": "",
        "closed": false
    },
    {
        "id": 73,
        "prize": "",
        "closed": true
    },
    {
        "id": 74,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 75,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 76,
        "prize": "",
        "closed": true
    },
    {
        "id": 77,
        "prize": "",
        "closed": false
    },
    {
        "id": 78,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 79,
        "prize": "",
        "closed": false
    },
    {
        "id": 80,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 81,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 82,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 83,
        "prize": "",
        "closed": true
    },
    {
        "id": 84,
        "prize": "",
        "closed": false
    },
    {
        "id": 85,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 86,
        "prize": "",
        "closed": false
    },
    {
        "id": 87,
        "prize": "",
        "closed": false
    },
    {
        "id": 88,
        "prize": "",
        "closed": false
    },
    {
        "id": 89,
        "prize": "",
        "closed": false
    },
    {
        "id": 90,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 91,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 92,
        "prize": "",
        "closed": true
    },
    {
        "id": 93,
        "prize": "",
        "closed": false
    },
    {
        "id": 94,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 95,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 96,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 97,
        "prize": "",
        "closed": true
    },
    {
        "id": 98,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 99,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 100,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 101,
        "prize": "",
        "closed": false
    },
    {
        "id": 102,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 103,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 104,
        "prize": "",
        "closed": true
    },
    {
        "id": 105,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 106,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 107,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 108,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 109,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 110,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 111,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 112,
        "prize": "",
        "closed": false
    },
    {
        "id": 113,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 114,
        "prize": "",
        "closed": false
    },
    {
        "id": 115,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 116,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 117,
        "prize": "",
        "closed": true
    },
    {
        "id": 118,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 119,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 120,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 121,
        "prize": "",
        "closed": true
    },
    {
        "id": 122,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 123,
        "prize": "",
        "closed": false
    },
    {
        "id": 124,
        "prize": "",
        "closed": false
    },
    {
        "id": 125,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 126,
        "prize": "",
        "closed": true
    },
    {
        "id": 127,
        "prize": "",
        "closed": false
    },
    {
        "id": 128,
        "prize": "",
        "closed": true
    },
    {
        "id": 129,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 130,
        "prize": "",
        "closed": true
    },
    {
        "id": 131,
        "prize": "",
        "closed": false
    },
    {
        "id": 132,
        "prize": "",
        "closed": false
    },
    {
        "id": 133,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 134,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 135,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 136,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 137,
        "prize": "",
        "closed": true
    },
    {
        "id": 138,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 139,
        "prize": "",
        "closed": false
    },
    {
        "id": 140,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 141,
        "prize": "",
        "closed": true
    },
    {
        "id": 142,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 143,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 144,
        "prize": "",
        "closed": false
    },
    {
        "id": 145,
        "prize": "",
        "closed": false
    },
    {
        "id": 146,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 147,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 148,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 149,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 150,
        "prize": "",
        "closed": true
    },
    {
        "id": 151,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 152,
        "prize": "",
        "closed": true
    },
    {
        "id": 153,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 154,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 155,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 156,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 157,
        "prize": "",
        "closed": false
    },
    {
        "id": 158,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 159,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 160,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 161,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 162,
        "prize": "",
        "closed": false
    },
    {
        "id": 163,
        "prize": "",
        "closed": false
    },
    {
        "id": 164,
        "prize": "",
        "closed": false
    },
    {
        "id": 165,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 166,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 167,
        "prize": "",
        "closed": false
    },
    {
        "id": 168,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 169,
        "prize": "",
        "closed": true
    },
    {
        "id": 170,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 171,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 172,
        "prize": "",
        "closed": true
    },
    {
        "id": 173,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 174,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 175,
        "prize": "",
        "closed": false
    },
    {
        "id": 176,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 177,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 178,
        "prize": "",
        "closed": true
    },
    {
        "id": 179,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 180,
        "prize": "",
        "closed": false
    },
    {
        "id": 181,
        "prize": "",
        "closed": true
    },
    {
        "id": 182,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 183,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 184,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 185,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 186,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 187,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 188,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 189,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 190,
        "prize": "",
        "closed": false
    },
    {
        "id": 191,
        "prize": "",
        "closed": true
    },
    {
        "id": 192,
        "prize": "",
        "closed": false
    },
    {
        "id": 193,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 194,
        "prize": "",
        "closed": false
    },
    {
        "id": 195,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 196,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 197,
        "prize": "",
        "closed": false
    },
    {
        "id": 198,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 199,
        "prize": "",
        "closed": false
    },
    {
        "id": 200,
        "prize": "",
        "closed": true
    },
    {
        "id": 201,
        "prize": "",
        "closed": true
    },
    {
        "id": 202,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 203,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 204,
        "prize": "",
        "closed": true
    },
    {
        "id": 205,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 206,
        "prize": "",
        "closed": false
    },
    {
        "id": 207,
        "prize": "",
        "closed": false
    },
    {
        "id": 208,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 209,
        "prize": "",
        "closed": true
    },
    {
        "id": 210,
        "prize": "",
        "closed": false
    },
    {
        "id": 211,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 212,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 213,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 214,
        "prize": "",
        "closed": true
    },
    {
        "id": 215,
        "prize": "",
        "closed": true
    },
    {
        "id": 216,
        "prize": "",
        "closed": false
    },
    {
        "id": 217,
        "prize": "",
        "closed": false
    },
    {
        "id": 218,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 219,
        "prize": "Золото",
        "closed": true
    },
    {
        "id": 220,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 221,
        "prize": "",
        "closed": false
    },
    {
        "id": 222,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 223,
        "prize": "Золото",
        "closed": false
    },
    {
        "id": 224,
        "prize": "",
        "closed": true
    }
],
};