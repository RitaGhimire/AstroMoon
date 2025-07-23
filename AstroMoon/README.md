
# Web Development Project 5/6 - **FriendlyCat Dashboard 🐱**

Submitted by: **Rita Ghimire**

This web app: **Displays a dashboard of cat breed information fetched from The Cat API. Users can explore breeds, search by name or origin, and filter results by maximum lifespan using a slider.**

Time spent: **14** hours spent in total

---

## Required Features

The following **required** functionality is completed:

- ✅ **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays more than 10 unique cat breeds, each in its own row
  - Each row includes at least two features: name, origin, and lifespan
- ✅ **`useEffect` React hook and `async`/`await` are used**
- ✅ **The app dashboard includes at least three summary statistics about the data**
  - Longest-living cat's name, origin, and lifespan
  - Total number of breeds shown
  - Number of cats that pass friendliness filters (`dog_friendly`, `child_friendly`, `energy_level` > 4)
- ✅ **A search bar allows the user to search for an item in the fetched data**
  - The search bar filters cats by name or origin
  - The list only updates when the user clicks the "Search" button
- ✅ **An additional filter allows the user to restrict displayed items by specified categories**
  - A range slider filters cats by maximum lifespan
  - This filter works independently or alongside the search filter

---

## Optional Features

The following **optional** features are implemented:

- ✅ Multiple filters can be applied simultaneously
- ✅ Filters use different input types:
  - Text input for search
  - Slider input for lifespan

---

## Additional Features

- ✅ Displays the cat with the highest lifespan, including name, origin, and lifespan
- ✅ Filters default list to only include friendly cats (`dog_friendly`, `child_friendly`, `energy_level` > 4)
- ✅ Styled layout with a left-hand nav, dashboard body, and responsive components

---

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Video Walkthrough](https://imgur.com/a/oDIB9Eq.gif)

GIF created with https://imgur.com/a/oDIB9Eq.gif

---

## Notes

- Managing filters independently without triggering on every keystroke was a key challenge.
- Parsing string-based lifespan data (e.g., `"12 - 15"`) into numbers required careful use of `.split()` and `parseInt`.
- The Cat API returns inconsistent image data for some breeds — had to handle missing image IDs gracefully.
- Used routes to navigate different pages
- Created graphs and charts

---


## License

    Copyright [2025] [Rita Ghimire]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
