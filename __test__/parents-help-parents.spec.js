

function reviewStarts(rating) {
  if (rating === 1) {
    return `<img src={OneStar} alt="rating" />`;
  } else if (rating === 2) {
    return `<img src={TwoStars} alt="rating" />`;
  } else if (rating === 3) {
    return `<img src={ThreeStars} alt="rating" />`;
  } else if (rating === 4) {
    return `<img src={FourStars} alt="rating" />`;
  } else {
    return `<img src={FiveStars} alt="rating" />`;
  }
}

  describe("Rating function", () => {
    test("Give stars depnding the rating", () => {
      const input = 1
        
      const output = `<img src={OneStar} alt="rating"/>`

      expect(reviewStarts(input)).toEqual(output);
    });
});
  