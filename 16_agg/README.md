# Mongo Aggregation

## Resources

* [Stages](https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/)

## Agenda

* What is aggregation?
  * Derive data
  * data processing pipeline
* Parts of aggregation
  * `db.getCollection`
  * `.aggregate`
  * array of stages
* Aggregation examples

## Stages

Stage | Description
----- | -----------
`$unwind` | Creates a new document for each item in an array
`$group` | Group documents by some expression (using the _id field)
`$lookup` | Lookup a document in another collection
`$match` | Filter documents
`$limit` | Return only a subset of documents
