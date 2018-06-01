export const get = (req, res) => {
	res.send({method: req.method})
}

export const getid = (req, res) => {
	res.send({method: req.method, id: req.params.id})
}

export const post = (req, res) => {
	res.send({method: req.method, body: req.body})
}

export const put = (req, res) => {
	res.send({method: req.method, id: req.params.id})
}

export const del = (req, res) => {
	res.send({method: req.method, id: req.params.id})
}

export default {get, getid, post, put, del}