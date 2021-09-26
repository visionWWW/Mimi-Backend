function similarityScore (a, b) {

  a = convertToMag(a);
  b = convertToMag(b);

  aFirstMax = firstMax(a);
  bFirstMax = firstMax(b);

  if (aFirstMax < bFirstMax) {
    b = b.slice(bFirstMax - aFirstMax, b.length);
  }

  if (aFirstMax > bFirstMax) {
    a = a.slice(aFirstMax - aFirstMax, a.length);
  }

  if (a.length < b.length) {
    b = b.slice(0, a.length);
  }

  if (a.length > b.length) {
    a = a.slice(0, b.length);
  }

  return cosineSimilarity(a, b);
}

function firstMax(a) {
  ai = 1;
  for (ai = 1; ai < a.length; ai++) {
    if (a[ai] + TOLLERANCE < a[ai-1]) {
      return ai;
    }
  }
  return -1;
}

function convertToMag(a) {
  return a.map(function (vec) { return magnitude(vec); });
}

function cosineSimilarity(a, b) {
  return dotProduct(a, b) / (magnitude(a) * magnitude(b));
}

function magnitude(vec) {
  mag = 0;

  for(i = 0; i < vec.length; i++) {
    mag += vec[i] * vec[i];
  }
  return Math.sqrt(mag);
}

function dotProduct(a, b) {
  dotProd = 0;

  for (i = 0; i < a.length; i++) {
    dotProd += a[i] * b[i];
  }
  return dotProd;
}