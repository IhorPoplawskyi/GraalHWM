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
    id: 0,
    closed: true,
  },
  {
    id: 1,
    closed: true,
  },
  {
    id: 2,
    closed: false,
  },
  {
    id: 3,
    closed: true,
  },
  {
    id: 4,
    closed: true,
  },
  {
    id: 5,
    closed: false,
  },
  {
    id: 6,
    closed: false,
  },
  {
    id: 7,
    closed: true,
  },
  {
    id: 8,
    closed: false,
  },
  {
    id: 9,
    closed: true,
  },
  {
    id: 10,
    closed: true,
  },
  {
    id: 11,
    closed: true,
  },
  {
    id: 12,
    closed: false,
  },
  {
    id: 13,
    closed: true,
  },
  {
    id: 14,
    closed: false,
  },
  {
    id: 15,
    closed: true,
  },
  {
    id: 16,
    closed: true,
  },
  {
    id: 17,
    closed: false,
  },
  {
    id: 18,
    closed: true,
  },
  {
    id: 19,
    closed: true,
  },
  {
    id: 20,
    closed: false,
  },
  {
    id: 21,
    closed: true,
  },
  {
    id: 22,
    closed: true,
  },
  {
    id: 23,
    closed: false,
  },
  {
    id: 24,
    closed: true,
  },
  {
    id: 25,
    closed: true,
  },
  {
    id: 26,
    closed: true,
  },
  {
    id: 27,
    closed: false,
  },
  {
    id: 28,
    closed: true,
  },
  {
    id: 29,
    closed: true,
  },
  {
    id: 30,
    closed: true,
  },
  {
    id: 31,
    closed: false,
  },
  {
    id: 32,
    closed: false,
  },
  {
    id: 33,
    closed: true,
  },
  {
    id: 34,
    closed: false,
  },
  {
    id: 35,
    closed: true,
  },
  {
    id: 36,
    closed: true,
  },
  {
    id: 37,
    closed: false,
  },
  {
    id: 38,
    closed: false,
  },
  {
    id: 39,
    closed: true,
  },
  {
    id: 40,
    closed: true,
  },
  {
    id: 41,
    closed: false,
  },
  {
    id: 42,
    closed: true,
  },
  {
    id: 43,
    closed: false,
  },
  {
    id: 44,
    closed: false,
  },
  {
    id: 45,
    closed: false,
  },
  {
    id: 46,
    closed: true,
  },
  {
    id: 47,
    closed: false,
  },
  {
    id: 48,
    closed: true,
  },
  {
    id: 49,
    closed: true,
  },
  {
    id: 50,
    closed: true,
  },
  {
    id: 51,
    closed: true,
  },
  {
    id: 52,
    closed: false,
  },
  {
    id: 53,
    closed: true,
  },
  {
    id: 54,
    closed: false,
  },
  {
    id: 55,
    closed: true,
  },
  {
    id: 56,
    closed: false,
  },
  {
    id: 57,
    closed: true,
  },
  {
    id: 58,
    closed: false,
  },
  {
    id: 59,
    closed: true,
  },
  {
    id: 60,
    closed: false,
  },
  {
    id: 61,
    closed: true,
  },
  {
    id: 62,
    closed: false,
  },
  {
    id: 63,
    closed: false,
  },
  {
    id: 64,
    closed: false,
  },
  {
    id: 65,
    closed: false,
  },
  {
    id: 66,
    closed: false,
  },
  {
    id: 67,
    closed: false,
  },
  {
    id: 68,
    closed: false,
  },
  {
    id: 69,
    closed: true,
  },
  {
    id: 70,
    closed: true,
  },
  {
    id: 71,
    closed: false,
  },
  {
    id: 72,
    closed: true,
  },
  {
    id: 73,
    closed: false,
  },
  {
    id: 74,
    closed: true,
  },
  {
    id: 75,
    closed: false,
  },
  {
    id: 76,
    closed: false,
  },
  {
    id: 77,
    closed: false,
  },
  {
    id: 78,
    closed: false,
  },
  {
    id: 79,
    closed: false,
  },
  {
    id: 80,
    closed: true,
  },
  {
    id: 81,
    closed: true,
  },
  {
    id: 82,
    closed: true,
  },
  {
    id: 83,
    closed: true,
  },
  {
    id: 84,
    closed: true,
  },
  {
    id: 85,
    closed: false,
  },
  {
    id: 86,
    closed: true,
  },
  {
    id: 87,
    closed: false,
  },
  {
    id: 88,
    closed: false,
  },
  {
    id: 89,
    closed: true,
  },
  {
    id: 90,
    closed: false,
  },
  {
    id: 91,
    closed: true,
  },
  {
    id: 92,
    closed: false,
  },
  {
    id: 93,
    closed: false,
  },
  {
    id: 94,
    closed: true,
  },
  {
    id: 95,
    closed: true,
  },
  {
    id: 96,
    closed: false,
  },
  {
    id: 97,
    closed: false,
  },
  {
    id: 98,
    closed: false,
  },
  {
    id: 99,
    closed: false,
  },
  {
    id: 100,
    closed: true,
  },
  {
    id: 101,
    closed: true,
  },
  {
    id: 102,
    closed: false,
  },
  {
    id: 103,
    closed: true,
  },
  {
    id: 104,
    closed: true,
  },
  {
    id: 105,
    closed: false,
  },
  {
    id: 106,
    closed: false,
  },
  {
    id: 107,
    closed: true,
  },
  {
    id: 108,
    closed: false,
  },
  {
    id: 109,
    closed: true,
  },
  {
    id: 110,
    closed: false,
  },
  {
    id: 111,
    closed: false,
  },
  {
    id: 112,
    closed: false,
  },
  {
    id: 113,
    closed: false,
  },
  {
    id: 114,
    closed: false,
  },
  {
    id: 115,
    closed: false,
  },
  {
    id: 116,
    closed: false,
  },
  {
    id: 117,
    closed: true,
  },
  {
    id: 118,
    closed: false,
  },
  {
    id: 119,
    closed: false,
  },
  {
    id: 120,
    closed: true,
  },
  {
    id: 121,
    closed: false,
  },
  {
    id: 122,
    closed: true,
  },
  {
    id: 123,
    closed: true,
  },
  {
    id: 124,
    closed: false,
  },
  {
    id: 125,
    closed: true,
  },
  {
    id: 126,
    closed: true,
  },
  {
    id: 127,
    closed: true,
  },
  {
    id: 128,
    closed: true,
  },
  {
    id: 129,
    closed: true,
  },
  {
    id: 130,
    closed: false,
  },
  {
    id: 131,
    closed: true,
  },
  {
    id: 132,
    closed: false,
  },
  {
    id: 133,
    closed: true,
  },
  {
    id: 134,
    closed: false,
  },
  {
    id: 135,
    closed: true,
  },
  {
    id: 136,
    closed: false,
  },
  {
    id: 137,
    closed: false,
  },
  {
    id: 138,
    closed: true,
  },
  {
    id: 139,
    closed: false,
  },
  {
    id: 140,
    closed: true,
  },
  {
    id: 141,
    closed: true,
  },
  {
    id: 142,
    closed: false,
  },
  {
    id: 143,
    closed: false,
  },
  {
    id: 144,
    closed: false,
  },
  {
    id: 145,
    closed: false,
  },
  {
    id: 146,
    closed: true,
  },
  {
    id: 147,
    closed: true,
  },
  {
    id: 148,
    closed: false,
  },
  {
    id: 149,
    closed: true,
  },
  {
    id: 150,
    closed: false,
  },
  {
    id: 151,
    closed: false,
  },
  {
    id: 152,
    closed: false,
  },
  {
    id: 153,
    closed: false,
  },
  {
    id: 154,
    closed: true,
  },
  {
    id: 155,
    closed: false,
  },
  {
    id: 156,
    closed: false,
  },
  {
    id: 157,
    closed: true,
  },
  {
    id: 158,
    closed: false,
  },
  {
    id: 159,
    closed: true,
  },
  {
    id: 160,
    closed: false,
  },
  {
    id: 161,
    closed: false,
  },
  {
    id: 162,
    closed: false,
  },
  {
    id: 163,
    closed: false,
  },
  {
    id: 164,
    closed: false,
  },
  {
    id: 165,
    closed: true,
  },
  {
    id: 166,
    closed: true,
  },
  {
    id: 167,
    closed: true,
  },
  {
    id: 168,
    closed: true,
  },
  {
    id: 169,
    closed: false,
  },
  {
    id: 170,
    closed: false,
  },
  {
    id: 171,
    closed: true,
  },
  {
    id: 172,
    closed: true,
  },
  {
    id: 173,
    closed: true,
  },
  {
    id: 174,
    closed: false,
  },
  {
    id: 175,
    closed: true,
  },
  {
    id: 176,
    closed: true,
  },
  {
    id: 177,
    closed: true,
  },
  {
    id: 178,
    closed: false,
  },
  {
    id: 179,
    closed: false,
  },
  {
    id: 180,
    closed: false,
  },
  {
    id: 181,
    closed: false,
  },
  {
    id: 182,
    closed: false,
  },
  {
    id: 183,
    closed: true,
  },
  {
    id: 184,
    closed: true,
  },
  {
    id: 185,
    closed: true,
  },
  {
    id: 186,
    closed: false,
  },
  {
    id: 187,
    closed: true,
  },
  {
    id: 188,
    closed: false,
  },
  {
    id: 189,
    closed: true,
  },
  {
    id: 190,
    closed: true,
  },
  {
    id: 191,
    closed: false,
  },
  {
    id: 192,
    closed: true,
  },
  {
    id: 193,
    closed: true,
  },
  {
    id: 194,
    closed: false,
  },
  {
    id: 195,
    closed: true,
  },
  {
    id: 196,
    closed: false,
  },
  {
    id: 197,
    closed: false,
  },
  {
    id: 198,
    closed: false,
  },
  {
    id: 199,
    closed: true,
  },
  {
    id: 200,
    closed: true,
  },
  {
    id: 201,
    closed: false,
  },
  {
    id: 202,
    closed: true,
  },
  {
    id: 203,
    closed: false,
  },
  {
    id: 204,
    closed: false,
  },
  {
    id: 205,
    closed: false,
  },
  {
    id: 206,
    closed: false,
  },
  {
    id: 207,
    closed: true,
  },
  {
    id: 208,
    closed: false,
  },
  {
    id: 209,
    closed: true,
  },
  {
    id: 210,
    closed: true,
  },
  {
    id: 211,
    closed: false,
  },
  {
    id: 212,
    closed: false,
  },
  {
    id: 213,
    closed: false,
  },
  {
    id: 214,
    closed: true,
  },
  {
    id: 215,
    closed: true,
  },
  {
    id: 216,
    closed: false,
  },
  {
    id: 217,
    closed: true,
  },
  {
    id: 218,
    closed: true,
  },
  {
    id: 219,
    closed: true,
  },
  {
    id: 220,
    closed: true,
  },
  {
    id: 221,
    closed: false,
  },
  {
    id: 222,
    closed: false,
  },
  {
    id: 223,
    closed: true,
  },
  {
    id: 224,
    closed: false,
  },
]} 

export const secondGraal = {
  id: 2,
  date: "22.04.2025",
  data: [
    {
      id: 0,
      closed: false,
    },
    {
      id: 1,
      closed: false,
    },
    {
      id: 2,
      closed: false,
    },
    {
      id: 3,
      closed: true,
    },
    {
      id: 4,
      closed: true,
    },
    {
      id: 5,
      closed: true,
    },
    {
      id: 6,
      closed: false,
    },
    {
      id: 7,
      closed: true,
    },
    {
      id: 8,
      closed: true,
    },
    {
      id: 9,
      closed: true,
    },
    {
      id: 10,
      closed: false,
    },
    {
      id: 11,
      closed: true,
    },
    {
      id: 12,
      closed: true,
    },
    {
      id: 13,
      closed: true,
    },
    {
      id: 14,
      closed: true,
    },
    {
      id: 15,
      closed: false,
    },
    {
      id: 16,
      closed: false,
    },
    {
      id: 17,
      closed: false,
    },
    {
      id: 18,
      closed: false,
    },
    {
      id: 19,
      closed: false,
    },
    {
      id: 20,
      closed: true,
    },
    {
      id: 21,
      closed: false,
    },
    {
      id: 22,
      closed: true,
    },
    {
      id: 23,
      closed: true,
    },
    {
      id: 24,
      closed: true,
    },
    {
      id: 25,
      closed: true,
    },
    {
      id: 26,
      closed: false,
    },
    {
      id: 27,
      closed: true,
    },
    {
      id: 28,
      closed: false,
    },
    {
      id: 29,
      closed: false,
    },
    {
      id: 30,
      closed: false,
    },
    {
      id: 31,
      closed: false,
    },
    {
      id: 32,
      closed: false,
    },
    {
      id: 33,
      closed: false,
    },
    {
      id: 34,
      closed: false,
    },
    {
      id: 35,
      closed: true,
    },
    {
      id: 36,
      closed: true,
    },
    {
      id: 37,
      closed: true,
    },
    {
      id: 38,
      closed: false,
    },
    {
      id: 39,
      closed: false,
    },
    {
      id: 40,
      closed: true,
    },
    {
      id: 41,
      closed: true,
    },
    {
      id: 42,
      closed: true,
    },
    {
      id: 43,
      closed: true,
    },
    {
      id: 44,
      closed: true,
    },
    {
      id: 45,
      closed: true,
    },
    {
      id: 46,
      closed: false,
    },
    {
      id: 47,
      closed: false,
    },
    {
      id: 48,
      closed: false,
    },
    {
      id: 49,
      closed: false,
    },
    {
      id: 50,
      closed: true,
    },
    {
      id: 51,
      closed: false,
    },
    {
      id: 52,
      closed: false,
    },
    {
      id: 53,
      closed: false,
    },
    {
      id: 54,
      closed: true,
    },
    {
      id: 55,
      closed: true,
    },
    {
      id: 56,
      closed: true,
    },
    {
      id: 57,
      closed: true,
    },
    {
      id: 58,
      closed: true,
    },
    {
      id: 59,
      closed: false,
    },
    {
      id: 60,
      closed: false,
    },
    {
      id: 61,
      closed: true,
    },
    {
      id: 62,
      closed: false,
    },
    {
      id: 63,
      closed: false,
    },
    {
      id: 64,
      closed: true,
    },
    {
      id: 65,
      closed: true,
    },
    {
      id: 66,
      closed: true,
    },
    {
      id: 67,
      closed: false,
    },
    {
      id: 68,
      closed: false,
    },
    {
      id: 69,
      closed: true,
    },
    {
      id: 70,
      closed: true,
    },
    {
      id: 71,
      closed: true,
    },
    {
      id: 72,
      closed: false,
    },
    {
      id: 73,
      closed: true,
    },
    {
      id: 74,
      closed: true,
    },
    {
      id: 75,
      closed: false,
    },
    {
      id: 76,
      closed: true,
    },
    {
      id: 77,
      closed: true,
    },
    {
      id: 78,
      closed: true,
    },
    {
      id: 79,
      closed: false,
    },
    {
      id: 80,
      closed: false,
    },
    {
      id: 81,
      closed: false,
    },
    {
      id: 82,
      closed: true,
    },
    {
      id: 83,
      closed: false,
    },
    {
      id: 84,
      closed: false,
    },
    {
      id: 85,
      closed: false,
    },
    {
      id: 86,
      closed: true,
    },
    {
      id: 87,
      closed: true,
    },
    {
      id: 88,
      closed: false,
    },
    {
      id: 89,
      closed: false,
    },
    {
      id: 90,
      closed: true,
    },
    {
      id: 91,
      closed: true,
    },
    {
      id: 92,
      closed: false,
    },
    {
      id: 93,
      closed: false,
    },
    {
      id: 94,
      closed: true,
    },
    {
      id: 95,
      closed: true,
    },
    {
      id: 96,
      closed: false,
    },
    {
      id: 97,
      closed: false,
    },
    {
      id: 98,
      closed: false,
    },
    {
      id: 99,
      closed: true,
    },
    {
      id: 100,
      closed: true,
    },
    {
      id: 101,
      closed: true,
    },
    {
      id: 102,
      closed: true,
    },
    {
      id: 103,
      closed: true,
    },
    {
      id: 104,
      closed: false,
    },
    {
      id: 105,
      closed: false,
    },
    {
      id: 106,
      closed: false,
    },
    {
      id: 107,
      closed: true,
    },
    {
      id: 108,
      closed: false,
    },
    {
      id: 109,
      closed: true,
    },
    {
      id: 110,
      closed: false,
    },
    {
      id: 111,
      closed: false,
    },
    {
      id: 112,
      closed: false,
    },
    {
      id: 113,
      closed: false,
    },
    {
      id: 114,
      closed: true,
    },
    {
      id: 115,
      closed: true,
    },
    {
      id: 116,
      closed: true,
    },
    {
      id: 117,
      closed: false,
    },
    {
      id: 118,
      closed: true,
    },
    {
      id: 119,
      closed: true,
    },
    {
      id: 120,
      closed: false,
    },
    {
      id: 121,
      closed: false,
    },
    {
      id: 122,
      closed: true,
    },
    {
      id: 123,
      closed: false,
    },
    {
      id: 124,
      closed: true,
    },
    {
      id: 125,
      closed: false,
    },
    {
      id: 126,
      closed: true,
    },
    {
      id: 127,
      closed: false,
    },
    {
      id: 128,
      closed: false,
    },
    {
      id: 129,
      closed: true,
    },
    {
      id: 130,
      closed: false,
    },
    {
      id: 131,
      closed: true,
    },
    {
      id: 132,
      closed: true,
    },
    {
      id: 133,
      closed: false,
    },
    {
      id: 134,
      closed: false,
    },
    {
      id: 135,
      closed: false,
    },
    {
      id: 136,
      closed: true,
    },
    {
      id: 137,
      closed: false,
    },
    {
      id: 138,
      closed: false,
    },
    {
      id: 139,
      closed: false,
    },
    {
      id: 140,
      closed: false,
    },
    {
      id: 141,
      closed: true,
    },
    {
      id: 142,
      closed: true,
    },
    {
      id: 143,
      closed: true,
    },
    {
      id: 144,
      closed: true,
    },
    {
      id: 145,
      closed: false,
    },
    {
      id: 146,
      closed: false,
    },
    {
      id: 147,
      closed: false,
    },
    {
      id: 148,
      closed: true,
    },
    {
      id: 149,
      closed: true,
    },
    {
      id: 150,
      closed: true,
    },
    {
      id: 151,
      closed: false,
    },
    {
      id: 152,
      closed: false,
    },
    {
      id: 153,
      closed: true,
    },
    {
      id: 154,
      closed: false,
    },
    {
      id: 155,
      closed: true,
    },
    {
      id: 156,
      closed: true,
    },
    {
      id: 157,
      closed: false,
    },
    {
      id: 158,
      closed: true,
    },
    {
      id: 159,
      closed: false,
    },
    {
      id: 160,
      closed: true,
    },
    {
      id: 161,
      closed: true,
    },
    {
      id: 162,
      closed: false,
    },
    {
      id: 163,
      closed: true,
    },
    {
      id: 164,
      closed: false,
    },
    {
      id: 165,
      closed: true,
    },
    {
      id: 166,
      closed: true,
    },
    {
      id: 167,
      closed: true,
    },
    {
      id: 168,
      closed: false,
    },
    {
      id: 169,
      closed: true,
    },
    {
      id: 170,
      closed: false,
    },
    {
      id: 171,
      closed: false,
    },
    {
      id: 172,
      closed: false,
    },
    {
      id: 173,
      closed: true,
    },
    {
      id: 174,
      closed: true,
    },
    {
      id: 175,
      closed: false,
    },
    {
      id: 176,
      closed: true,
    },
    {
      id: 177,
      closed: false,
    },
    {
      id: 178,
      closed: false,
    },
    {
      id: 179,
      closed: false,
    },
    {
      id: 180,
      closed: true,
    },
    {
      id: 181,
      closed: true,
    },
    {
      id: 182,
      closed: true,
    },
    {
      id: 183,
      closed: false,
    },
    {
      id: 184,
      closed: false,
    },
    {
      id: 185,
      closed: true,
    },
    {
      id: 186,
      closed: true,
    },
    {
      id: 187,
      closed: true,
    },
    {
      id: 188,
      closed: true,
    },
    {
      id: 189,
      closed: true,
    },
    {
      id: 190,
      closed: true,
    },
    {
      id: 191,
      closed: true,
    },
    {
      id: 192,
      closed: true,
    },
    {
      id: 193,
      closed: true,
    },
    {
      id: 194,
      closed: false,
    },
    {
      id: 195,
      closed: false,
    },
    {
      id: 196,
      closed: false,
    },
    {
      id: 197,
      closed: true,
    },
    {
      id: 198,
      closed: true,
    },
    {
      id: 199,
      closed: false,
    },
    {
      id: 200,
      closed: true,
    },
    {
      id: 201,
      closed: true,
    },
    {
      id: 202,
      closed: true,
    },
    {
      id: 203,
      closed: false,
    },
    {
      id: 204,
      closed: true,
    },
    {
      id: 205,
      closed: true,
    },
    {
      id: 206,
      closed: true,
    },
    {
      id: 207,
      closed: true,
    },
    {
      id: 208,
      closed: true,
    },
    {
      id: 209,
      closed: false,
    },
    {
      id: 210,
      closed: false,
    },
    {
      id: 211,
      closed: true,
    },
    {
      id: 212,
      closed: false,
    },
    {
      id: 213,
      closed: false,
    },
    {
      id: 214,
      closed: true,
    },
    {
      id: 215,
      closed: true,
    },
    {
      id: 216,
      closed: true,
    },
    {
      id: 217,
      closed: false,
    },
    {
      id: 218,
      closed: true,
    },
    {
      id: 219,
      closed: true,
    },
    {
      id: 220,
      closed: true,
    },
    {
      id: 221,
      closed: true,
    },
    {
      id: 222,
      closed: true,
    },
    {
      id: 223,
      closed: false,
    },
    {
      id: 224,
      closed: false,
    },
  ],
}; 

export const thirdGraal = {
  id: 3,
  date: '05.06.2026',
  data: [
    {
      id: 0,
      closed: false,
    },
    {
      id: 1,
      closed: true,
    },
    {
      id: 2,
      closed: false,
    },
    {
      id: 3,
      closed: true,
    },
    {
      id: 4,
      closed: false,
    },
    {
      id: 5,
      closed: false,
    },
    {
      id: 6,
      closed: false,
    },
    {
      id: 7,
      closed: false,
    },
    {
      id: 8,
      closed: false,
    },
    {
      id: 9,
      closed: false,
    },
    {
      id: 10,
      closed: false,
    },
    {
      id: 11,
      closed: true,
    },
    {
      id: 12,
      closed: true,
    },
    {
      id: 13,
      closed: true,
    },
    {
      id: 14,
      closed: true,
    },
    {
      id: 15,
      closed: true,
    },
    {
      id: 16,
      closed: false,
    },
    {
      id: 17,
      closed: true,
    },
    {
      id: 18,
      closed: false,
    },
    {
      id: 19,
      closed: true,
    },
    {
      id: 20,
      closed: true,
    },
    {
      id: 21,
      closed: false,
    },
    {
      id: 22,
      closed: true,
    },
    {
      id: 23,
      closed: false,
    },
    {
      id: 24,
      closed: false,
    },
    {
      id: 25,
      closed: true,
    },
    {
      id: 26,
      closed: false,
    },
    {
      id: 27,
      closed: true,
    },
    {
      id: 28,
      closed: false,
    },
    {
      id: 29,
      closed: true,
    },
    {
      id: 30,
      closed: false,
    },
    {
      id: 31,
      closed: false,
    },
    {
      id: 32,
      closed: false,
    },
    {
      id: 33,
      closed: true,
    },
    {
      id: 34,
      closed: true,
    },
    {
      id: 35,
      closed: false,
    },
    {
      id: 36,
      closed: true,
    },
    {
      id: 37,
      closed: false,
    },
    {
      id: 38,
      closed: true,
    },
    {
      id: 39,
      closed: true,
    },
    {
      id: 40,
      closed: true,
    },
    {
      id: 41,
      closed: false,
    },
    {
      id: 42,
      closed: true,
    },
    {
      id: 43,
      closed: false,
    },
    {
      id: 44,
      closed: false,
    },
    {
      id: 45,
      closed: true,
    },
    {
      id: 46,
      closed: false,
    },
    {
      id: 47,
      closed: false,
    },
    {
      id: 48,
      closed: false,
    },
    {
      id: 49,
      closed: true,
    },
    {
      id: 50,
      closed: false,
    },
    {
      id: 51,
      closed: false,
    },
    {
      id: 52,
      closed: false,
    },
    {
      id: 53,
      closed: true,
    },
    {
      id: 54,
      closed: true,
    },
    {
      id: 55,
      closed: false,
    },
    {
      id: 56,
      closed: true,
    },
    {
      id: 57,
      closed: true,
    },
    {
      id: 58,
      closed: true,
    },
    {
      id: 59,
      closed: true,
    },
    {
      id: 60,
      closed: false,
    },
    {
      id: 61,
      closed: true,
    },
    {
      id: 62,
      closed: true,
    },
    {
      id: 63,
      closed: false,
    },
    {
      id: 64,
      closed: true,
    },
    {
      id: 65,
      closed: false,
    },
    {
      id: 66,
      closed: false,
    },
    {
      id: 67,
      closed: true,
    },
    {
      id: 68,
      closed: false,
    },
    {
      id: 69,
      closed: false,
    },
    {
      id: 70,
      closed: true,
    },
    {
      id: 71,
      closed: true,
    },
    {
      id: 72,
      closed: true,
    },
    {
      id: 73,
      closed: true,
    },
    {
      id: 74,
      closed: true,
    },
    {
      id: 75,
      closed: false,
    },
    {
      id: 76,
      closed: false,
    },
    {
      id: 77,
      closed: false,
    },
    {
      id: 78,
      closed: true,
    },
    {
      id: 79,
      closed: false,
    },
    {
      id: 80,
      closed: true,
    },
    {
      id: 81,
      closed: false,
    },
    {
      id: 82,
      closed: false,
    },
    {
      id: 83,
      closed: false,
    },
    {
      id: 84,
      closed: true,
    },
    {
      id: 85,
      closed: false,
    },
    {
      id: 86,
      closed: false,
    },
    {
      id: 87,
      closed: true,
    },
    {
      id: 88,
      closed: true,
    },
    {
      id: 89,
      closed: true,
    },
    {
      id: 90,
      closed: true,
    },
    {
      id: 91,
      closed: true,
    },
    {
      id: 92,
      closed: true,
    },
    {
      id: 93,
      closed: false,
    },
    {
      id: 94,
      closed: false,
    },
    {
      id: 95,
      closed: false,
    },
    {
      id: 96,
      closed: true,
    },
    {
      id: 97,
      closed: true,
    },
    {
      id: 98,
      closed: false,
    },
    {
      id: 99,
      closed: true,
    },
    {
      id: 100,
      closed: false,
    },
    {
      id: 101,
      closed: true,
    },
    {
      id: 102,
      closed: true,
    },
    {
      id: 103,
      closed: true,
    },
    {
      id: 104,
      closed: false,
    },
    {
      id: 105,
      closed: false,
    },
    {
      id: 106,
      closed: true,
    },
    {
      id: 107,
      closed: false,
    },
    {
      id: 108,
      closed: true,
    },
    {
      id: 109,
      closed: true,
    },
    {
      id: 110,
      closed: false,
    },
    {
      id: 111,
      closed: false,
    },
    {
      id: 112,
      closed: true,
    },
    {
      id: 113,
      closed: true,
    },
    {
      id: 114,
      closed: true,
    },
    {
      id: 115,
      closed: false,
    },
    {
      id: 116,
      closed: false,
    },
    {
      id: 117,
      closed: false,
    },
    {
      id: 118,
      closed: false,
    },
    {
      id: 119,
      closed: true,
    },
    {
      id: 120,
      closed: true,
    },
    {
      id: 121,
      closed: false,
    },
    {
      id: 122,
      closed: false,
    },
    {
      id: 123,
      closed: false,
    },
    {
      id: 124,
      closed: false,
    },
    {
      id: 125,
      closed: false,
    },
    {
      id: 126,
      closed: false,
    },
    {
      id: 127,
      closed: true,
    },
    {
      id: 128,
      closed: false,
    },
    {
      id: 129,
      closed: false,
    },
    {
      id: 130,
      closed: true,
    },
    {
      id: 131,
      closed: true,
    },
    {
      id: 132,
      closed: true,
    },
    {
      id: 133,
      closed: false,
    },
    {
      id: 134,
      closed: true,
    },
    {
      id: 135,
      closed: false,
    },
    {
      id: 136,
      closed: true,
    },
    {
      id: 137,
      closed: false,
    },
    {
      id: 138,
      closed: true,
    },
    {
      id: 139,
      closed: false,
    },
    {
      id: 140,
      closed: false,
    },
    {
      id: 141,
      closed: false,
    },
    {
      id: 142,
      closed: false,
    },
    {
      id: 143,
      closed: true,
    },
    {
      id: 144,
      closed: true,
    },
    {
      id: 145,
      closed: true,
    },
    {
      id: 146,
      closed: true,
    },
    {
      id: 147,
      closed: true,
    },
    {
      id: 148,
      closed: true,
    },
    {
      id: 149,
      closed: false,
    },
    {
      id: 150,
      closed: true,
    },
    {
      id: 151,
      closed: false,
    },
    {
      id: 152,
      closed: false,
    },
    {
      id: 153,
      closed: false,
    },
    {
      id: 154,
      closed: false,
    },
    {
      id: 155,
      closed: true,
    },
    {
      id: 156,
      closed: false,
    },
    {
      id: 157,
      closed: false,
    },
    {
      id: 158,
      closed: true,
    },
    {
      id: 159,
      closed: false,
    },
    {
      id: 160,
      closed: false,
    },
    {
      id: 161,
      closed: false,
    },
    {
      id: 162,
      closed: true,
    },
    {
      id: 163,
      closed: true,
    },
    {
      id: 164,
      closed: false,
    },
    {
      id: 165,
      closed: false,
    },
    {
      id: 166,
      closed: false,
    },
    {
      id: 167,
      closed: true,
    },
    {
      id: 168,
      closed: true,
    },
    {
      id: 169,
      closed: false,
    },
    {
      id: 170,
      closed: true,
    },
    {
      id: 171,
      closed: false,
    },
    {
      id: 172,
      closed: false,
    },
    {
      id: 173,
      closed: true,
    },
    {
      id: 174,
      closed: true,
    },
    {
      id: 175,
      closed: false,
    },
    {
      id: 176,
      closed: false,
    },
    {
      id: 177,
      closed: true,
    },
    {
      id: 178,
      closed: true,
    },
    {
      id: 179,
      closed: false,
    },
    {
      id: 180,
      closed: true,
    },
    {
      id: 181,
      closed: false,
    },
    {
      id: 182,
      closed: false,
    },
    {
      id: 183,
      closed: true,
    },
    {
      id: 184,
      closed: false,
    },
    {
      id: 185,
      closed: true,
    },
    {
      id: 186,
      closed: true,
    },
    {
      id: 187,
      closed: false,
    },
    {
      id: 188,
      closed: true,
    },
    {
      id: 189,
      closed: true,
    },
    {
      id: 190,
      closed: true,
    },
    {
      id: 191,
      closed: true,
    },
    {
      id: 192,
      closed: true,
    },
    {
      id: 193,
      closed: true,
    },
    {
      id: 194,
      closed: false,
    },
    {
      id: 195,
      closed: true,
    },
    {
      id: 196,
      closed: false,
    },
    {
      id: 197,
      closed: true,
    },
    {
      id: 198,
      closed: true,
    },
    {
      id: 199,
      closed: false,
    },
    {
      id: 200,
      closed: false,
    },
    {
      id: 201,
      closed: false,
    },
    {
      id: 202,
      closed: false,
    },
    {
      id: 203,
      closed: false,
    },
    {
      id: 204,
      closed: true,
    },
    {
      id: 205,
      closed: true,
    },
    {
      id: 206,
      closed: true,
    },
    {
      id: 207,
      closed: false,
    },
    {
      id: 208,
      closed: true,
    },
    {
      id: 209,
      closed: true,
    },
    {
      id: 210,
      closed: true,
    },
    {
      id: 211,
      closed: true,
    },
    {
      id: 212,
      closed: false,
    },
    {
      id: 213,
      closed: false,
    },
    {
      id: 214,
      closed: true,
    },
    {
      id: 215,
      closed: false,
    },
    {
      id: 216,
      closed: false,
    },
    {
      id: 217,
      closed: true,
    },
    {
      id: 218,
      closed: true,
    },
    {
      id: 219,
      closed: true,
    },
    {
      id: 220,
      closed: false,
    },
    {
      id: 221,
      closed: false,
    },
    {
      id: 222,
      closed: false,
    },
    {
      id: 223,
      closed: true,
    },
    {
      id: 224,
      closed: false,
    },
  ],
};