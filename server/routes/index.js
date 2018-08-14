const router = require('express').Router()
const conn = require('../conn')

router.get('/categories', function (req, res, next) {
  const sql = `
  SELECT
  	child.id, child.category, parent.category AS parent_category, child.slug
  FROM
  	categories child
  LEFT JOIN 
  	categories parent ON child.parent_id = parent.id
  `

  conn.query(sql, (error, results, fields) => {
    let mainCat = []

    for (let i = 0; i < results.length; i++) {
      if(results[i].parent_category == null) {
        results[i].sub = []
        mainCat.push(results[i])
      }
    }
    for (let i = 0; i < results.length; i++) {
      if (results[i].parent_category != null) {
        for (let j = 0; j < mainCat.length; j++) {
          if (mainCat[j].category == results[i].parent_category) {
            mainCat[j].sub.push(results[i])
          }
        }
      }
    }
    res.json(mainCat)
  })
})

router.get('/listings/:id', function (req, res, next) {
  const sql = `
  SELECT
    list.id, list.child_id, list.name, list.image
  FROM
    listings list
  LEFT JOIN
    categories cat ON list.child_id = cat.id
  WHERE list.child_id = cat.id
  `

  conn.query(sql, (error, results, fields) => {
    var id = req.params.id
    var array = []

    for (var i = 0; i < results.length; i++) {
      if (results[i].child_id == id) {
        array.push(results[i])
      }
    }
    res.json(array)
  })
})

router.get('/alllistings/:id', function (req, res, next) {
  const sql = `
  SELECT
    list.id, list.child_id, list.name, list.image, cat.parent_id
  FROM
    listings list
  LEFT JOIN
    categories cat ON cat.id = list.child_id
  WHERE 
    cat.id = list.child_id OR cat.parent_id = list.child_id
  `

  conn.query(sql, (error, results, fields) => {
    var id = req.params.id
    var array = []

    for (var i = 0; i < results.length; i++) {
      if (results[i].parent_id == id) {
        array.push(results[i])
      }
    }
    res.json(array)
  })
})

router.get('/specificlisting/:id', function (req, res, next) {
  const sql = `
  SELECT
    list.id, list.name, list.image, list.description
  FROM 
    listings list
  `

  conn.query(sql, (error, results, fields) => {
    var id = req.params.id
    var array = []

    for (var i = 0; i < results.length; i++) {
      if (results[i].child_id == id) {
        array.push(results[i])
      }
    }
    res.json(array)
  })
})

router.post('/listings', (req, res, next) => {
  const sql = `
    INSERT INTO listings (name, child_id, description, image)
    VALUES (?, ?, ?, ?)
  `

  conn.query(sql, [req.body.name, req.body.child_id, req.body.description, req.body.image], (error, results, fields) => {
    res.json(results)
  })
})


module.exports = router

