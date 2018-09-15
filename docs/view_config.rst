View Configs
##########################

Genome Position Search Box
**************************

The genome position search box section a view config is specific to each view.
It is used to search for locations in the view. The full configuration has a
pointer to a chromSizes file and an autocomplete source which will provide
suggestions for gene names. The autocomplete source should point to a
`gene-annotations` file.

UIDs
****

UID stands for unique identifier. Every view and track in the higlass view
config has a UID. If it's not specified in the viewconfig it's randomly
generated by the client when the view is created.

initialXDomain and initialYDomain
*********************************

The fields contain the initial coordinates which are displayed when HiGlass
first loads the viewconfig. If the ``initialYDomain`` is not present, it is set
to equal the ``initialXDomain``. If that isn't present either, both are
assigned values of ``[0,1]]``.

.. code-block:: javascript

    {
        views: [
            {
                  "uid": "AhI0wMP6ScybnFp6BmLuPQ",
                  "initialXDomain": [
                    973907089.1176914,
                    1196247735.9596405
                  ],
                  "initialYDomain": [
                    -12281154450.083118,
                    -12145323104.213125
                  ],
                "genomePositionSearchBox": {
                    "autocompleteServer": "http://higlass.io/api/v1",
                    "autocompleteId": "OHJakQICQD6gTD7skx4EWA",
                    "chromInfoServer": "http://higlass.io/api/v1",
                    "chromInfoId": "hg19",
                    "visible": true
                }
        ]
    }

trackSourceServers
******************

The field `trackSourceServers` at the root level of the viewconf tells higlass
where it can find tracks to load. If you have a local instance running, then
`http://localhost/api/v1` should be included. Our public instance at
`http://higlass.io` also provides access to a number of public datasets.

.. code-block:: javascript

    {
      "trackSourceServers": [
        "http://higlass.io/api/v1",
        "http://localhost:8989/api/v1"
      ],
    }

exportViewUrl
*************

The ``exportViewUrl`` field in the viewconf specifies which server should be used
to store exported viewconfs. This server stores exported viewconfs in its 
database, assigns them a uid, and makes them accessible through its API at
``/api/v1/viewconfs/uid/``. 

.. code-block:: javascript

    {
        "exportViewUrl": "/api/v1/viewconfs",
    }

Tracks
******

Tracks can be placed into four distinct areas: top, bottom, left, right or
center. The location of the track determines what type of data can be shown in
it. Center tracks are used to show data that can be zoomed along two axes.
Horizontal (top, bottom) and vertical (left, right) are used to show data that
can be zoomed along a single axis.

Each set of tracks is placed within a view.

.. code-block:: javascript

    {
      "views": [
        {
          "tracks": {
            "top": [],
            "left": [],
            "center": [],
            "bottom": [],
            "right": []
          },
        }
      ],
    }