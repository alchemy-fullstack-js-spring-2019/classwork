doTaxes(taxForms, (err, refund) => {
  if (err) return  prepareForAudit(() => { });
  if (refund < 1000) return fireAccountant(() => { });
  console.log('Great');
});

reserveTable('Jack Rabbit', 1, err => {
  if (err) return reserveTable('big kahuna burger', 1, err => { });

  hireLyftDriver(() => {
    takeASeat(() => { });
  });
});

orderAPackage((err, package) => {
  package.open(err => {

  });
});
