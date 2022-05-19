import { Injectable } from '@angular/core';
import { Gallery } from './gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  public gallery: Gallery[] = [
    {
      id: 1,
      category: 'animals',
      icon: './assets/icon/cat-solid.svg',
    },
    {
      id: 2,
      category: 'animals',
      icon: './assets/icon/Roundicons-100-Free-Solid-Elephant.svg',
    },
    {
      id: 3,
      category: 'animals',
      icon: './assets/icon/Roundicons-100-Free-Solid-Gorilla.svg',
    },
    {
      id: 4,
      category: 'animals',
      icon: './assets/icon/Roundicons-100-Free-Solid-Lion.svg',
    },
    {
      id: 5,
      category: 'animals',
      icon: './assets/icon/Roundicons-100-Free-Solid-Rabbit.svg',
    },
    {
      id: 6,
      category: 'animals',
      icon: './assets/icon/Roundicons-100-Free-Solid-Whale.svg',
    },
    {
      id: 7,
      category: 'animals',
      icon: './assets/icon/cruelty_free_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 8,
      category: 'animals',
      icon: './assets/icon/Roundicons-100-Free-Solid-Eagle.svg',
    },
    {
      id: 9,
      category: 'animals',
      icon: './assets/icon/dog-solid.svg',
    },
    {
      id: 10,
      category: 'animals',
      icon: './assets/icon/diamond-solid.svg',
    },
    {
      id: 11,
      category: 'home',
      icon: './assets/icon/Roundicons-100-Free-Solid-Bookcase.svg',
    },
    {
      id: 12,
      category: 'home',
      icon: './assets/icon/Roundicons-100-Free-Solid-Grandfather-clock.svg',
    },
    {
      id: 13,
      category: 'home',
      icon: './assets/icon/Roundicons-100-Free-Solid-Home.svg',
    },
    {
      id: 14,
      category: 'home',
      icon: './assets/icon/Roundicons-100-Free-Solid-Telephone.svg',
    },
    {
      id: 15,
      category: 'home',
      icon: './assets/icon/Roundicons-100-Free-Solid-Vacuum-cleaner.svg',
    },
    {
      id: 16,
      category: 'home',
      icon: './assets/icon/Roundicons-100-Free-Solid-Water-kettle.svg',
    },
    {
      id: 17,
      category: 'home',
      icon: './assets/icon/Roundicons-100-Free-Solid-Wheelbarrow.svg',
    },
    {
      id: 18,
      category: 'home',
      icon: './assets/icon/Roundicons-100-Free-Solid-Burger.svg',
    },
    {
      id: 19,
      category: 'home',
      icon: './assets/icon/Roundicons-100-Free-Solid-Crib-decor.svg',
    },
    {
      id: 20,
      category: 'home',
      icon: './assets/icon/Roundicons-100-Free-Solid-Crib.svg',
    },
    {
      id: 21,
      category: 'shapes',
      icon: './assets/icon/Praveen-Minimal-Outline-Favourite.svg',
    },
    {
      id: 22,
      category: 'shapes',
      icon: './assets/icon/crop_square_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 23,
      category: 'shapes',
      icon: './assets/icon/circle_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 24,
      category: 'shapes',
      icon: './assets/icon/pentagon_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 25,
      category: 'shapes',
      icon: './assets/icon/hexagon_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 26,
      category: 'shapes',
      icon: './assets/icon/favorite_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 27,
      category: 'shapes',
      icon: './assets/icon/change_history_FILL1_wght200_GRAD0_opsz24.svg',
    },
    {
      id: 28,
      category: 'shapes',
      icon: './assets/icon/diamond-solid-copy.svg',
    },
    {
      id: 29,
      category: 'shapes',
      icon: './assets/icon/cube-solid.svg',
    },
    {
      id: 30,
      category: 'shapes',
      icon: './assets/icon/moon-solid.svg',
    },
    {
      id: 31,
      category: 'transport',
      icon: './assets/icon/airport_shuttle_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 32,
      category: 'transport',
      icon: './assets/icon/agriculture_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 33,
      category: 'transport',
      icon: './assets/icon/directions_bike_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 34,
      category: 'transport',
      icon: './assets/icon/directions_boat_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 35,
      category: 'transport',
      icon: './assets/icon/directions_bus_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 36,
      category: 'transport',
      icon: './assets/icon/local_taxi_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 37,
      category: 'transport',
      icon: './assets/icon/subway_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 38,
      category: 'transport',
      icon: './assets/icon/train_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 39,
      category: 'transport',
      icon: './assets/icon/tram_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 40,
      category: 'transport',
      icon: './assets/icon/two_wheeler_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 41,
      category: 'weather',
      icon: './assets/icon/wb_sunny_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 42,
      category: 'weather',
      icon: './assets/icon/ac_unit_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 43,
      category: 'weather',
      icon: './assets/icon/cloudy_snowing_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 44,
      category: 'weather',
      icon: './assets/icon/air_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 45,
      category: 'weather',
      icon: './assets/icon/cyclone_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 46,
      category: 'weather',
      icon: './assets/icon/flood_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 47,
      category: 'weather',
      icon: './assets/icon/sunny_snowing_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 48,
      category: 'weather',
      icon: './assets/icon/thunderstorm_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 49,
      category: 'weather',
      icon: './assets/icon/tsunami_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 50,
      category: 'weather',
      icon: './assets/icon/snowing_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 51,
      category: 'sport',
      icon: './assets/icon/surfing_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 52,
      category: 'sport',
      icon: './assets/icon/sports_martial_arts_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 53,
      category: 'sport',
      icon: './assets/icon/sports_handball_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 54,
      category: 'sport',
      icon: './assets/icon/sports_football_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 55,
      category: 'sport',
      icon: './assets/icon/snowboarding_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 56,
      category: 'sport',
      icon: './assets/icon/skateboarding_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 57,
      category: 'sport',
      icon: './assets/icon/sailing_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 58,
      category: 'sport',
      icon: './assets/icon/kayaking_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 59,
      category: 'sport',
      icon: './assets/icon/downhill_skiing_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 60,
      category: 'sport',
      icon: './assets/icon/kitesurfing_FILL0_wght400_GRAD0_opsz48.svg',
    },
    {
      id: 61,
      category: 'christmas',
      icon: './assets/icon/Danieledesantis-Christmas-Gift.svg',
    },
    {
      id: 62,
      category: 'christmas',
      icon: './assets/icon/Danieledesantis-Christmas-Ball.svg',
    },
    {
      id: 63,
      category: 'christmas',
      icon: './assets/icon/Danieledesantis-Christmas-Candy-cane.svg',
    },
    {
      id: 64,
      category: 'christmas',
      icon: './assets/icon/Danieledesantis-Christmas-Gingerbread-man.svg',
    },
    {
      id: 65,
      category: 'christmas',
      icon: './assets/icon/Danieledesantis-Christmas-Mistletoe.svg',
    },
    {
      id: 66,
      category: 'christmas',
      icon: './assets/icon/Danieledesantis-Christmas-Santa-claus.svg',
    },
    {
      id: 67,
      category: 'christmas',
      icon: './assets/icon/Danieledesantis-Christmas-Snowman.svg',
    },
    {
      id: 68,
      category: 'christmas',
      icon: './assets/icon/Danieledesantis-Christmas-Sock.svg',
    },
    {
      id: 69,
      category: 'christmas',
      icon: './assets/icon/Danieledesantis-Christmas-Tree.svg',
    },
    {
      id: 70,
      category: 'christmas',
      icon: './assets/icon/Danieledesantis-Christmas-Wreath.svg',
    },
    {
      id: 71,
      category: 'halloween',
      icon: './assets/icon/Icons8-Halloween-Cat.svg',
    },
    {
      id: 72,
      category: 'halloween',
      icon: './assets/icon/Icons8-Halloween-Bat.svg',
    },
    {
      id: 73,
      category: 'halloween',
      icon: './assets/icon/Icons8-Halloween-Ghost.svg',
    },
    {
      id: 74,
      category: 'halloween',
      icon: './assets/icon/Icons8-Halloween-Gingerbread-man.svg',
    },
    {
      id: 75,
      category: 'halloween',
      icon: './assets/icon/Icons8-Halloween-Wizard.svg',
    },
    {
      id: 76,
      category: 'halloween',
      icon: './assets/icon/Icons8-Halloween-Witch.svg',
    },
    {
      id: 77,
      category: 'halloween',
      icon: './assets/icon/Icons8-Halloween-Halloween-candy.svg',
    },
    {
      id: 78,
      category: 'halloween',
      icon: './assets/icon/Icons8-Halloween-Skeleton.svg',
    },
    {
      id: 79,
      category: 'halloween',
      icon: './assets/icon/Icons8-Halloween-Spider.svg',
    },
    {
      id: 80,
      category: 'halloween',
      icon: './assets/icon/Icons8-Halloween-Werewolf.svg',
    },
    {
      id: 81,
      category: 'stractures',
      icon: './assets/icon/Roundicons-100-Free-Solid-Apartment-building.svg',
    },
    {
      id: 82,
      category: 'stractures',
      icon: './assets/icon/Roundicons-100-Free-Solid-Big-ben.svg',
    },
    {
      id: 83,
      category: 'stractures',
      icon: './assets/icon/Roundicons-100-Free-Solid-Castle.svg',
    },
    {
      id: 84,
      category: 'stractures',
      icon: './assets/icon/Roundicons-100-Free-Solid-Home.svg',
    },
    {
      id: 85,
      category: 'stractures',
      icon: './assets/icon/Roundicons-100-Free-Solid-Industry.svg',
    },
    {
      id: 86,
      category: 'stractures',
      icon: './assets/icon/Roundicons-100-Free-Solid-London-eye.svg',
    },
    {
      id: 87,
      category: 'stractures',
      icon: './assets/icon/Roundicons-100-Free-Solid-Statue-crist-redeemer-cristo-redentor.svg',
    },
    {
      id: 88,
      category: 'stractures',
      icon: './assets/icon/Roundicons-100-Free-Solid-Statue-of-liberty.svg',
    },
    {
      id: 89,
      category: 'stractures',
      icon: './assets/icon/Roundicons-100-Free-Solid-Shop.svg',
    },
    {
      id: 90,
      category: 'stractures',
      icon: './assets/icon/Roundicons-100-Free-Solid-Turbine-factory.svg',
    },
  ];

  toggleOpt;

  constructor() {}
}
