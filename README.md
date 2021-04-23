# Project Overview

## ARTIC Artwork Generator
[ARTIC Link] (https://rararamberg.github.io/ARTIC-generator/)

## Project Description

This application uses the Art Institute of Chicago API to allow users to pull up art pieces that have been through the museum. This application will display those artworks based off of user selection in drop down menus labeled by museum's departments or categories of art.

## API and Data Sample


ARTIC has two separate APIs, one for archive of artwork data and another specifically for artworks images.

[Artwork URL] (https://api.artic.edu/api/v1/artworks?page=3&limit=100)


[Image URL] (https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg)


[Sample Image URL] (https://www.artic.edu/iiif/2/8b687509-2df3-6b1e-5487-f437fa02a1b5/full/843,/0/default.jpg)


Note: 'Identifier' = image_id
```json
{
    "pagination": {
        "total": 114721,
        "limit": 100,
        "offset": 0,
        "total_pages": 1148,
        "current_page": 1,
        "next_url": "https://api.artic.edu/api/v1/artworks?page=2&limit=100"
    },
    "data": [
        {
            "id": 24306,
            "api_model": "artworks",
            "api_link": "https://api.artic.edu/api/v1/artworks/24306",
            "is_boosted": true,
            "title": "Blue and Green Music",
            "alt_titles": null,
            "thumbnail": {
                "lqip": "data:image/gif;base64,R0lGODlhBAAFAPQAADpDPD5IPD1UPjlBQUlWUExQV0lUXE5VXGh9ZWV3anSRcUVjgXWBgGiLkoKZk4udrJCnqYq2sqfCi6nDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoBE1S/BMjlBAjAIkh4QMRAgAOw==",
                "width": 4202,
                "height": 5084,
                "alt_text": "Abstract painting in predominant shades of blue, green, and black, featuring diagonal bands of color and undulating lines."
            },
            "main_reference_number": "1969.835",
            "has_not_been_viewed_much": false,
            "boost_rank": 60,
            "date_start": 1919,
            "date_end": 1921,
            "date_display": "1919/21",
            "date_qualifier_title": "c.",
            "date_qualifier_id": 60,
            "artist_display": "Georgia O'Keeffe\nAmerican, 1887–1986",
            "place_of_origin": "United States",
            "dimensions": "58.4 × 48.3 cm (23 × 19 in.)",
            "medium_display": "Oil on canvas",
            "inscriptions": null,
            "credit_line": "Alfred Stieglitz Collection, gift of Georgia O'Keeffe",
            "publication_history": "Art Institute of Chicago, The Art Institute of Chicago: Twentieth–Century Painting and Sculpture, selected by James N. Wood and Teri J. Edelstein (Art Institute of Chicago, 1996), p. 46 (ill.).\n\nBarbara Buhler Lynes, \"Georgia O'Keeffe: Catalogue Raisonné,\" (National Gallery of Art/Georgia O'Keeffe Foundation/Yale University Press, 1999) no. 1344 (vol. 1).\n\nJames W. Lane and Leo Katz, The Work of Georgia O’Keeffe: A Portfolio of 12 Paintings (New York, 1939), pl. 6.\n\nMilton W. Brown, American Painting from the Armory Show to the Depression (Princeton, 1955), ill. p. 126. \n\nLloyd Goodrich and Doris Bry, Georgia O’Keeffe (New York, 1970), p. 32 (ill.)\n\nArt Institute of Chicago, The Art Institute of Chicago: Twentieth–Century Painting and Sculpture, selected by James N. Wood and Teri J. Edelstein (Art Institute of Chicago, 1996), p.46, ill.\n\nBarbara Buhler Lynes, Georgia O'Keeffe Catalogue Raisonne Volume One (New Haven, Conneticut: Yale University Press;  Washington, DC: National Gallery of American Art; Abiquiu, New Mexico: The Georgia O'Keeffe Foundation, 1999), p 185, no.344.\n\nJudith A. Barter et al., American Modernism at the Art Institute of Chicago, From World War I to 1955, (Chicago: Art Institute of Chicago/Yale University Press, 2009), cat. 35.",
            "exhibition_history": "Art Institute of Chicago, Georgia O’Keeffe, Jan 21–Feb 22, 1943, cat. by Daniel Catton Rich, no. 5, p. 11.\n\nNew York, Whitney Museum of Art, Georgia O’Keeffe Retrospective Exhibition, Oct 8–Nov 29, 1970, no. 23; the Art Institute of Chicago, Jan 1–Feb 7, 1971; San Francisco Museum of Art, Feb or Mar?–Apr 30, 1971.\n\nLondon, Tate Gallery, Abstraction: Towards a New Art, Painting 1910–20, Feb 5–Apr 13, 1980, cat. 438.\n\nLondon, Hayward Gallery, Georgia O'Keeffe: American and Modern, Apr 8–Jun 22, 1993; Mexico City, Palacio de Bellas Artes, Jul 15–Oct 1, 1993.\n\nSan Antonio, Texas, Marion Koogler McNay Art Museum, O'Keeffe and Texas, Jan 27–Apr 5, 1998.\n\nWashington, DC, National Gallery of Art, Alfred Stieglitz and Modern Art in America, Jan 28–Apr 22, 2001.\n\nParis, Centre Georges Pompidou, Sounds and Lights, Sep 22–Jan 3, 2005. \n\nWashington, DC, Hirshhorn Museum and Sculpture Garden, Visual Music, 1905–2005; Museum of Contemporary Art, Los Angeles, Feb 13–May 22, 2005, Hirshhorn Museum and Sculpture Garden, Jun 23–Sep 11, 2005.\n\nWhitney Museum of American Art, Georgia O'Keeffe: Abstraction, Sep 17, 2009–Jan 17, 2010; Washington DC, Phillips Collection, Feb 6–May 9, 2012; Santa Fe, Georgia O'Keeffe Museum, May 28–Sep 12, 2010 (New York only).\n\nLondon, Tate Modern, Georgia O'Keeffe, Jul 6–Oct 30, 2016; Vienna, Bank Austria Kunstforum Wien, Dec 7, 2016–Mar 26, 2017; Toronto, Art Gallery of Ontario, Apr 22–Jul 30, 2017 (London only) cat. 28.\n\nCologne, Germany, Wallraf-Richartz-Museum, Es war einmal in Amerika – 300 Jahre US-amerikanische Kunst [Once Upon a Time in America: Three Centuries of American Art], Nov 23, 2018–Mar 24, 2019, cat. 105.",
            "provenance_text": "Georgia O’Keeffe (1887–1986), New York and New Mexico, 1919/21 [O’Keeffe moved permanently to New Mexico in 1949]; given through the Alfred Stieglitz Collection to the Art Institute of Chicago, 1969.",
            "publishing_verification_level": "Web Cataloged",
            "internal_department_id": 21,
            "fiscal_year": 1970,
            "fiscal_year_deaccession": null,
            "is_public_domain": false,
            "is_zoomable": true,
            "max_zoom_window_size": 1280,
            "copyright_notice": "© The Art Institute of Chicago",
            "has_multimedia_resources": false,
            "has_educational_resources": true,
            "colorfulness": 32.818,
            "color": {
                "h": 202,
                "l": 32,
                "s": 57,
                "percentage": 0.06024236503616867,
                "population": 518
            },
            "latitude": null,
            "longitude": null,
            "latlon": null,
            "is_on_view": false,
            "on_loan_display": null,
            "gallery_title": null,
            "gallery_id": null,
            "artwork_type_title": null,
            "artwork_type_id": null,
            "department_title": "Arts of the Americas",
            "department_id": "PC-3",
            "artist_id": 36062,
            "artist_title": "Georgia O'Keeffe",
            "alt_artist_ids": [],
            "artist_ids": [
                36062
            ],
            "artist_titles": [
                "Georgia O'Keeffe"
            ],
            "category_ids": [
                "PC-825",
                "PC-154",
                "PC-827",
                "PC-3"
            ],
            "category_titles": [
                "Women artists",
                "Chicago Artists",
                "SAIC Alumni and Faculty",
                "Arts of the Americas"
            ],
            "artwork_catalogue_ids": [
                null
            ],
            "term_titles": [
                "oil on canvas",
                "oil paint (paint)",
                "Modernism",
                "canvas",
                "painting",
                "modern and contemporary art"
            ],
            "style_id": "TM-5981",
            "style_title": "Modernism",
            "alt_style_ids": [],
            "style_ids": [
                "TM-5981"
            ],
            "style_titles": [
                "Modernism"
            ],
            "classification_id": "TM-66",
            "classification_title": "oil on canvas",
            "alt_classification_ids": [
                "TM-9",
                "TM-155"
            ],
            "classification_ids": [
                "TM-66",
                "TM-9",
                "TM-155"
            ],
            "classification_titles": [
                "oil on canvas",
                "painting",
                "modern and contemporary art"
            ],
            "subject_id": null,
            "alt_subject_ids": [],
            "subject_ids": [],
            "subject_titles": [],
            "material_id": "TM-2451",
            "alt_material_ids": [
                "TM-3124"
            ],
            "material_ids": [
                "TM-2451",
                "TM-3124"
            ],
            "material_titles": [
                "oil paint (paint)",
                "canvas"
            ],
            "technique_id": null,
            "alt_technique_ids": [],
            "technique_ids": [],
            "technique_titles": [],
            "theme_titles": [
                "Chicago Artists",
                "Women artists",
                "SAIC Alumni and Faculty"
            ],
            "image_id": "702580d8-451e-0b0c-bcc1-bac62e5f6631",
            "alt_image_ids": [
                "658ac796-ca54-ea7d-4238-424b3bb45708"
            ],
            "document_ids": [
                "92a80080-7a67-c6aa-5fd8-1a294240f49c"
            ],
            "sound_ids": [],
            "video_ids": [],
            "text_ids": [
                "92a80080-7a67-c6aa-5fd8-1a294240f49c"
            ],
            "section_ids": [],
            "section_titles": [],
            "site_ids": [],
            "suggest_autocomplete_boosted": "Blue and Green Music",
            "suggest_autocomplete_all": [
                {
                    "input": [
                        "1969.835"
                    ],
                    "contexts": {
                        "groupings": [
                            "accession"
                        ]
                    }
                },
                {
                    "input": [
                        "Blue and Green Music"
                    ],
                    "weight": 66140,
                    "contexts": {
                        "groupings": [
                            "title"
                        ]
                    }
                }
            ],
            "last_updated_source": "2021-04-17T00:30:10-05:00",
            "last_updated": "2021-04-17T00:31:21-05:00",
            "timestamp": "2021-04-17T15:10:22-05:00"
        },

```

## Wireframes


[Wireframe Desktop] ()https://wireframe.cc/PUV4ni)

[Wireframe Mobile] ()https://wireframe.cc/Ubi4Qr)

### MVP/PostMVP

#### MVP 

- 2 APIs (Image and Artwork)
- 2 Dropdown menu (Department, Category) pulls data into app
- Render result items'info: title, artist, date, image, department, category.
- On new search clear previous search results

#### PostMVP  

- Another dropdown for display year
- Include more info: origin, medium or artwork type.
- Hamburger menu to show and hide drop down menus
- For each category or department option a new header image is displayed and sub title.
- Link more info on artwork
- (Pull only current artwork on display and gallery info?)

## Project Schedule

This schedule will be used to keep track of my progress throughout the week and align with course expectations.  

|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|April 19| Project Approval | Complete
|April 19| Core Application Structure (HTML, CSS, etc.) | Complete
|April 19| Pseudocode JS Steps | Complete
|April 19| API request for Dropdowns | Complete
|April 19| Append Data to Option Tags in Drop Down Menu | Complete
|April 20| Get Option Values in Drop Down Menu | Complete
|April 20| Drop Down Menu Event Handlers| Complete
|April 20|  Get values for Result artwork info | Complete
|April 20|  API Image request for Artwork image tags | Complete
|April 21|  Append Results to DOM | Complete
|April 21|  Remove Previous Results | Complete
|April 21|  CSS Flex and Media Queries | Complete
|April 21| Testing MVP Requirements  | Complete
|April 22| Post-MVP and Advanced CSS | Semi-Complete
|April 23| Presentations | Incomplete

## Priority Matrix

[Priority Matrix] (https://wireframe.cc/6bvAs1)

## Timeframes

| Component      | Priority | Estimated Time | Time Invested | Actual Time |
| ---            | :---:    |  :---:         | :---:         | :---:       |
| Core Application Structure (HTML, CSS, etc.) | H        |4.5hrs           | 3hrs        | 3hrs      |
| Pseudocode JS Steps                          | H        |1.0hrs           | .5hrs        | .5hrs      |
| JS: API request for Dropdowns                | H        |2.0hrs           | 2hrs        | 2hrs      |
| JS: Append Data to Option Tags in Dropdowns  | H        |2.5hrs           | 2hrs        | 2hrs      |
|JS: Get Option Values in Drop Down Menu       | H        |2.5hrs           | 1hrs        | 1hrs      |
|JS: Drop Down Menu Event Handlers             | H        |2.0hrs           | 1hrs        | 1hrs      |
| JS: Get values for Result artwork info       | H        |3.5hrs           | 2hrs        | 2hrs      |
|JS: API Image request for Artwork image tags  | H        |4.0hrs           | .5hrs        | .5hrs      |
|JS:  Append Results to DOM                    | H        |4.0hrs           | 2hrs        | 2hrs      |
|JS: Remove Previous Results                   | H        |2.0hrs           | 1hrs        | 1hrs      |
|CSS: Flex and Media Queries                   | H        |4.5hrs           | 7.5hrs        | 7.5hrs      |
|Testing MVP Requirements                      | H/M      |1.5hrs           | 1hrs        | 1hrs      |
| Post-MVP and Advanced CSS                    | L        |6.5hrs           | 6hrs        | 6hrs      |
| Total | H | 40.5hrs| 29.5hrs | 29.5hrs |

## Code Snippet

If a user were to switch drop down menus, I wanted that previous menu to reset to its default. I found it to be an improved UX to help bookmark where user is by what current category user is retrieving artworks from.  

```
const deptButton = document.querySelector('#submit-dept');
deptButton.addEventListener('click', (e) => {
  e.preventDefault()
  getDeptValue()
  // == resets previous values if changing drop downs ==
  document.querySelector('#select-medium').value = document.querySelector('#med-default').value;
});

const medButton = document.querySelector('#submit-medium');
medButton.addEventListener('click', (e) => {
  e.preventDefault()
  getMedValue()
  // == resets previous values if changing drop downs ==
  document.querySelector('#select-dept').value = document.querySelector('#dept-default').value;
});
```

## Change Log
 I changed the category menu to medium since the category ids had either a lot of overlap with department ids or nulls. Some PMVPS I didn't get to, but I decided to keep out the hamburger menu as I believe keeping the drop down menu and ARTIC icon in view was more appealing and easier to navigate. 

At first I created the HTML elements for each resulted artwork div within backticks using string interpolation to pull individual endpoints and appending with insertAdjacentHTML() . Because this API is continoually being updated, I ran across some artworks that had null endpoints (ex: artist title or medium). To make code cleaner while also erasing or replacing endpoints with null, I went back and rewrote that section of code by creating the HTML elements with assigning variables to document.createElement(), using if/else statements to filter out null ids, textContent, and appending each HTML element to artDiv.