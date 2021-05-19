from flask import Flask, render_template, url_for, request
from sklearn.externals import joblib
import re
app = Flask(__name__)

filename = './pipeline.sav'
loaded_model = joblib.load(filename)

def pipeline(title, author, text):
	new_total = str(title) + ' ' + str(author) + ' ' + str(text)

	new_total = new_total.lower()
	new_total = re.sub(r'[^\w\s]','',new_total)
	result = loaded_model.predict([new_total])
	return result[0]

@app.route("/")
@app.route("/index.html")
def hello():
	return render_template('index.html')

@app.route("/", methods=['POST'])
@app.route("/index.html", methods=['POST'])
def hello_post():
	title = request.form['firstname']
	author = request.form['lastname']
	text = request.form['subject']
	val = pipeline(title, author, text)
	if val==0:
		return render_template('result.html')
	else:
		return render_template('index1.html', title=str(title), author=str(author))


@app.route("/index1.html")
def index1():
	return render_template('index1.html')

@app.route("/p1.html")
def p1():
	return render_template('p1.html')

@app.route("/result.html", methods=["GET","POST"])
def result():
	return render_template('result.html')