module.exports = function post (options) {
  var seneca = this

  seneca.add('post:text', function(msg, done) {
    var entry = this.util.clean(msg)
    delete entry.post

    entry.when = Date.now()

    this.act('store:save,kind:entry',entry)
    //this.act('search:index',entry)
    done()
  })
}
