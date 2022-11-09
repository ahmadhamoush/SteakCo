function Recipe(chef, preparation, ingredients) {
  this.chef = chef;
  this.preparation = preparation;
  this.ingredients = ingredients;
}

function Menu(category, name, price, img, recipe) {
  this.category = category;
  this.name = name;
  this.price = price;
  this.img = img;
  this.recipe = recipe;
}

//SALADS
const salad1 = new Menu(
  'Salad',
  'FRIED OR GRILLED CHICKEN SALAD',
  12, '../images/menu/salad/salad1.jpg',
  new Recipe(
    'Chef',
    'preps',
    'A bed of lettuce topped with grilled or fried chicken,a blend of shredded cheddar jack cheese & hard boiled egg'));

const salad2 = new Menu(
  'Salad',
  'HOT BACON SPINACH SALAD',
  17,
  '../images/menu/salad/salad2.jpg',
  new Recipe('Chef',
    'preps',
    'A bed of spinach topped with feta cheese  almonds, bacon bits, egg, red onion and a warm bacon dressing.Served with toasted pita 10 '));

const salad3 = new Menu(
  'Salad',
  'CHICKEN CAESAR SALAD',
  15, '../images/menu/salad/salad3.jpg',
  new Recipe('Chef',
    'preps',
    'A bed of romaine lettuce tossed in creamy caesar dressing and topped with croutons, shaved parmesan and a grilled-sliced chicken breast'));

const salad4 = new Menu(
  'Salad',
  'CHEF SALAD',
  16, '../images/menu/salad/salad4.jpeg',
  new Recipe('Chef',
    'preps',
    'A bed of lettuce topped with ham, turkey, bacon cheddar jack cheese and hard boiled egg'));

const salad5 = new Menu(
  'Salad',
  'MEDITERRANEAN SALAD',
  15,
  '../images/menu/salad/salad5.jpg',
  new Recipe('Chef',
    'preps',
    'Romaine lettuce topped with tomato,kalamata olives, red onion and feta cheese. Served with balsamic vinaigrette,hummus and a toasted pita'));

const salad6 = new Menu(
  'Salad',
  'GRILLED CHICKEN TORTILLA SALAD',
  12,
  '../images/menu/salad/salad6.jpeg',
  new Recipe('Chef',
    'preps',
    'A bed of tortilla chips topped withmixed greens and tossed in a spicy ranch dressing,then topped with a grilled and sliced chicken breastand a blend of chedder jack cheese. Served with guacamole'));

const salads = [salad1, salad2, salad3, salad4, salad5, salad6];

//STEAK

const steak1 = new Menu(
  'Steak',
  'Victorias Filet Mignon',
  46,
  '../images/menu/steak/steak1.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'The most tender and juicy thick cut seasoned and seared. (240-320 Calories)'
  )
);
const steak2 = new Menu(
  'Steak',
  'OUTBACK CENTER-CUT SIRLOIN*',
  43,
  '../images/menu/steak/steak2.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Center-cut for tenderness. Lean, hearty and full of flavor. Seasoned and seared. (210-360 Calories)'
  )
);
const steak3 = new Menu(
  'Steak',
  'RIBEYE*',
  54,
  '../images/menu/steak/steak3.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Well-marbled, juicy and savory. Seasoned andseared for bold flavor. (910-1220 Calories)'
  )
);

const steak4 = new Menu(
  'Steak',
  'BONE-IN RIBEYE*',
  56,
  '../images/menu/steak/steak4.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Bone-in and extra marbled for maximum tenderness. Seasoned and flame grilled. (1350 Calories)'
  )
);
const steak5 = new Menu(
  'Steak',
  'BONE-IN NEW YORK STRIP*',
  63,
  '../images/menu/steak/steak5.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Thick cut, bone-in and full of rich flavor. Seasoned and flame grilled. (710 Calories)'
  )
);
const steak6 = new Menu(
  'Steak',
  'MELBOURNE PORTER HOUSE*',
  61,
  '../images/menu/steak/steak6.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'A flavorful combination of NY Strip and Filet Tenderloin. Seasoned and flame grilled. (860 Calories)'
  )
);

const steaks = [steak1, steak2, steak3, steak4, steak5, steak6];

//Soups
const soup1 = new Menu(
  'Soup',
  'BAKED POTATO SOUP',
  12,
  '../images/menu/soups/soup1.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Cup (300 Calories) 4.49 I Bowl (540 Calories)'
  )
);

const soup2 = new Menu(
  'Soup',
  'TASMANIAN CHILI',
  14,
  '../images/menu/soups/soup2.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Spicy, all steak, no beans. Cup (390 Calories) 4.99 I Crock (890 Calories)',
  )
);

const soup3 = new Menu(
  'Soup',
  'FRENCH ONION SOUP',
  11,
  '../images/menu/soups/soup3.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Caramelized onion in a hearty beef stock covered with french bread and melted Swiss cheese 6 (500 Calories)',
  )
);

const soup4 = new Menu(
  'Soup',
  'Steak & Vegetable Chili',
  18,
  '../images/menu/soups/soup4.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Hearty soup with tender steak cuts, topped with cheddar cheese.',
  )
);

const soup5 = new Menu(
  'Soup',
  'Chunky Potato Cheese',
  13,
  '../images/menu/soups/soup5.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Bacon bits and shredded cheddar cheese.'
  )
);

const soup6 = new Menu(
  'Soup',
  'Creamy Mushroom Steak',
  43,
  '../images/menu/soups/soup6.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Meat bits and mushroom.'
  )
);

const soups = [soup1, soup2, soup3, soup4, soup5, soup6];

const drink1 = new Menu(
  'Drinks',
  'Cold Brew & Tonic',
  13,
  '../images/menu/drinks/drink1.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Joffreys Coffee Cold Brew, Maple, Vanilla Syrup,Tonic Water'
  )
);

const drink2 = new Menu(
  'Drinks',
  'Specialty Character Drink',
  15,
  '../images/menu/drinks/drink2.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Minute Maid Zero Sugar Lemonade served in a souvenir Character Cup with a glowing Character Clip on Light'
  )
);

const drink3 = new Menu(
  'Drinks',
  'Earidescent Sip',
  16,
  '../images/menu/drinks/drink3.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Minute Maid® Premium Lemonade and Fruity Strawberry, Punch served in a souvenir 50th Celebration Cup with a surprise Character and a little bit of magic!'
  )
);

const drink4 = new Menu(
  'Drinks',
  'Sherbet Punch',
  18,
  '../images/menu/drinks/drink4.jpg',
  new Recipe(
    'Chef',
    'Preps',
    'Orange Sherbet, Sprite®, House-made Grenadine'
  )
);

const drink6 = new Menu(
  'Drinks',
  "Steakhouse Bloody Mary",
  19,
  '../images/menu/drinks/drink6.jpg',
  new Recipe(
    'Chef',
    'Preps',
    "Tito's Homemade Vodka, Natural Blonde Bloody Mary Mix, Steakhouse Seasoning."
  )
);

const drink7 = new Menu(
  'Drinks',
  "Bourbon Cold Brew",
  22,
  '../images/menu/drinks/drink7.jpg',
  new Recipe(
    'Chef',
    'Preps',
    "Maker's Mark, Steak Co's Coffee Cold Brew, MaDe, Vanilabean Cream."
  )
);

const drink8 = new Menu(
  'Drinks',
  "Tequila Sunrise",
  25,
  '../images/menu/drinks/drink8.jpg',
  new Recipe(
    'Chef',
    'Preps',
    "Herradura Reposado Tequila, Tropical Juices, Rosemary Simple Syrup, House-made Grenadine."
  )
);
const drink9 = new Menu(
  'Drinks',
  "Refillable Mimosa",
  23,
  '../images/menu/drinks/drink9.jpg',
  new Recipe(
    'Chef',
    'Preps',
    "Mas Fi Cava Brut Sparkling Wine and Orange Juice."
  )
);

const drinks = [drink1, drink2, drink3, drink4, drink6, drink7, drink8, drink9];

const menu = [salads, steaks, soups, drinks];
