NewnorthWGL = {};
NewnorthWGL.Float = {
	Clamp: function(min, max, value) {
	  return Math.min(Math.max(value, min), max);
	},
	Lerp: function(f1, f2, t) {
		return f1 + (f2 - f1) * t;
	},
	Transition: function(start, finish, velocity) {
		return finish < start ? Math.max(finish, start + velocity) : Math.min(finish, start + velocity);
	},
	WrapAngle: function(radians) {
		while(radians < -Math.PI)
		{
			radians += Math.PI + Math.PI;
		}

		while(radians > Math.PI)
		{
			radians -= Math.PI + Math.PI;
		}

		return radians;
	},
};
NewnorthWGL.Vec2 = {
	Add: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] + v2[0],
				v1[1] + v2[1]
			];
		}

		out[0] = v1[0] + v2[0];
		out[1] = v1[1] + v2[1];
		return out;
	},
	Addf: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] + v2,
				v1[1] + v2
			];
		}

		out[0] = v1[0] + v2;
		out[1] = v1[1] + v2;
		return out;
	},
	Angle: function(v) {
		return Math.atan2(v[1], v[0]);
	},
	Clone: function(v) {
		return [v[0], v[1]];
	},
	DirectionAngle: function(v1, v2) {
		return Math.atan2(v2[1] - v1[1], v2[0] - v1[0]);
	},
	Distance: function(v1, v2) {
		return NewnorthWGL.Vec2.Length([v2[0] - v1[0], v2[1] - v1[1]]);
	},
	Div: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] / v2[0],
				v1[1] / v2[1]
			];
		}

		out[0] = v1[0] / v2[0];
		out[1] = v1[1] / v2[1];
		return out;
	},
	Divf: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] / v2,
				v1[1] / v2
			];
		}

		out[0] = v1[0] / v2;
		out[1] = v1[1] / v2;
		return out;
	},
	IsEqual: function(v1, v2) {
		return v1[0] === v2[0] && v1[1] === v2[1];
	},
	Length: function(v) {
		return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
	},
	Lerp: function(out, v1, v2, t) {
		if(out === null) {
			return [
				v1[0] + (v2[0] - v1[0]) * t,
				v1[1] + (v2[1] - v1[1]) * t
			];
		}

		out[0] = v1[0] + (v2[0] - v1[0]) * t;
		out[1] = v1[1] + (v2[1] - v1[1]) * t;
		return out;
	},
	Mul: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] * v2[0],
				v1[1] * v2[1]
			];
		}

		out[0] = v1[0] * v2[0];
		out[1] = v1[1] * v2[1];
		return out;
	},
	Mulf: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] * v2,
				v1[1] * v2
			];
		}

		out[0] = v1[0] * v2;
		out[1] = v1[1] * v2;
		return out;
	},
	Normalize: function(out, v) {
		var length = NewnorthWGL.Vec2.Length(v);

		if(out === null) {
			return [
				v[0] / length,
				v[1] / length
			];
		}

		out[0] = v[0] / length;
		out[1] = v[1] / length;
		return out;
	},
	Rotate: function(out, v, r) {
		var c = Math.cos(r);
		var s = Math.sin(r);

		if(out === null) {
			return [
				v[0] * c - v[1] * s,
				v[0] * s + v[1] * c
			];
		}

		out[0] = v[0] * c - v[1] * s;
		out[1] = v[0] * s + v[1] * c;
		return out;
	},
	Sub: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] - v2[0],
				v1[1] - v2[1]
			];
		}

		out[0] = v1[0] - v2[0];
		out[1] = v1[1] - v2[1];
		return out;
	},
	Subf: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] - v2,
				v1[1] - v2
			];
		}

		out[0] = v1[0] - v2;
		out[1] = v1[1] - v2;
		return out;
	},
};
NewnorthWGL.Vec3 = {
	Add: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] + v2[0],
				v1[1] + v2[1],
				v1[2] + v2[2]
			];
		}

		out[0] = v1[0] + v2[0];
		out[1] = v1[1] + v2[1];
		out[2] = v1[2] + v2[2];
		return out;
	},
	Addf: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] + v2,
				v1[1] + v2,
				v1[2] + v2
			];
		}

		out[0] = v1[0] + v2;
		out[1] = v1[1] + v2;
		out[2] = v1[2] + v2;
		return out;
	},
	Clone: function(v) {
		return [v[0], v[1], v[2]];
	},
	Distance: function(v1, v2) {
		return NewnorthWGL.Vec3.Length([v2[0] - v1[0], v2[1] - v1[1], v2[2] - v1[2]]);
	},
	Div: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] / v2[0],
				v1[1] / v2[1],
				v1[2] / v2[2]
			];
		}

		out[0] = v1[0] / v2[0];
		out[1] = v1[1] / v2[1];
		out[2] = v1[2] / v2[2];
		return out;
	},
	Divf: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] / v2,
				v1[1] / v2,
				v1[2] / v2
			];
		}

		out[0] = v1[0] / v2;
		out[1] = v1[1] / v2;
		out[2] = v1[2] / v2;
		return out;
	},
	IsEqual: function(v1, v2) {
		return v1[0] === v2[0] && v1[1] === v2[1] && v1[2] === v2[2];
	},
	Length: function(v) {
		return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
	},
	Lerp: function(out, v1, v2, t) {
		if(out === null) {
			return [
				v1[0] + (v2[0] - v1[0]) * t,
				v1[1] + (v2[1] - v1[1]) * t,
				v1[2] + (v2[2] - v1[2]) * t
			];
		}

		out[0] = v1[0] + (v2[0] - v1[0]) * t;
		out[1] = v1[1] + (v2[1] - v1[1]) * t;
		out[2] = v1[2] + (v2[2] - v1[2]) * t;
		return out;
	},
	Mul: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] * v2[0],
				v1[1] * v2[1],
				v1[2] * v2[2]
			];
		}

		out[0] = v1[0] * v2[0];
		out[1] = v1[1] * v2[1];
		out[2] = v1[2] * v2[2];
		return out;
	},
	Mulf: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] * v2,
				v1[1] * v2,
				v1[2] * v2
			];
		}

		out[0] = v1[0] * v2;
		out[1] = v1[1] * v2;
		out[2] = v1[2] * v2;
		return out;
	},
	Normalize: function(out, v) {
		var length = NewnorthWGL.Vec3.Length(v);

		if(out === null) {
			return [
				v[0] / length,
				v[1] / length,
				v[2] / length
			];
		}

		out[0] = v[0] / length;
		out[1] = v[1] / length;
		out[2] = v[2] / length;
		return out;
	},
	RotateX: function(out, v, r) {
		var c = Math.cos(r);
		var s = Math.sin(r);

		if(out === null) {
			return [
				v[0],
				v[1] * c - v[2] * s,
				v[1] * s + v[2] * c
			];
		}

		out[0] = v[0];
		out[1] = v[1] * c - v[2] * s;
		out[2] = v[1] * s + v[2] * c;
		return out;
	},
	RotateY: function(out, v, r) {
		var c = Math.cos(r);
		var s = Math.sin(r);

		if(out === null) {
			return [
				v[0] * c - v[2] * s,
				v[1],
				v[0] * s + v[2] * c
			];
		}

		out[0] = v[0] * c - v[2] * s;
		out[1] = v[1];
		out[2] = v[0] * s + v[2] * c;
		return out;
	},
	RotateZ: function(out, v, r) {
		var c = Math.cos(r);
		var s = Math.sin(r);

		if(out === null) {
			return [
				v[0] * c - v[1] * s,
				v[0] * s + v[1] * c,
				v[2]
			];
		}

		out[0] = v[0] * c - v[1] * s;
		out[1] = v[0] * s + v[1] * c;
		out[2] = v[2];
		return out;
	},
	Sub: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] - v2[0],
				v1[1] - v2[1],
				v1[2] - v2[2]
			];
		}

		out[0] = v1[0] - v2[0];
		out[1] = v1[1] - v2[1];
		out[2] = v1[2] - v2[2];
		return out;
	},
	Subf: function(out, v1, v2) {
		if(out === null) {
			return [
				v1[0] - v2,
				v1[1] - v2,
				v1[2] - v2
			];
		}

		out[0] = v1[0] - v2;
		out[1] = v1[1] - v2;
		out[2] = v1[2] - v2;
		return out;
	},
	Transition: function(out, start, finish, velocity) {
		var direction = NewnorthWGL.Vec3.Normalize(
			null,
			[
				finish[0] - start[0],
				finish[1] - start[1],
				finish[2] - start[2]
			]
		);

		if(out === null) {
			return [
				finish[0] < start[0] ? Math.max(finish[0], start[0] + direction[0] * velocity) : Math.min(finish[0], start[0] + direction[0] * velocity),
				finish[1] < start[1] ? Math.max(finish[1], start[1] + direction[1] * velocity) : Math.min(finish[1], start[1] + direction[1] * velocity),
				finish[2] < start[2] ? Math.max(finish[2], start[2] + direction[2] * velocity) : Math.min(finish[2], start[2] + direction[2] * velocity)
			]
		}

		out[0] = finish[0] < start[0] ? Math.max(finish[0], start[0] + direction[0] * velocity) : Math.min(finish[0], start[0] + direction[0] * velocity);
		out[1] = finish[1] < start[1] ? Math.max(finish[1], start[1] + direction[1] * velocity) : Math.min(finish[1], start[1] + direction[1] * velocity);
		out[2] = finish[2] < start[2] ? Math.max(finish[2], start[2] + direction[2] * velocity) : Math.min(finish[2], start[2] + direction[2] * velocity);
		return out;
	},
};
NewnorthWGL.Vec4 = {
	Clone: function(v) {
		return [v[0], v[1], v[2], v[3]];
	},
	IsEqual: function(v1, v2) {
		return v1[0] === v2[0] && v1[1] === v2[1] && v1[2] === v2[2] && v1[3] === v2[3];
	},
	Length: function(v) {
		return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2] + v[3] * v[3]);
	},
	Normalize: function(out, v) {
		var length = NewnorthWGL.Vec4.Length(v);

		if(out === null) {
			return [
				v[0] / length,
				v[1] / length,
				v[2] / length,
				v[3] / length
			];
		}

		out[0] = v[0] / length;
		out[1] = v[1] / length;
		out[2] = v[2] / length;
		out[3] = v[3] / length;
		return out;
	},
	Transition: function(out, start, finish, velocity) {
		var direction = NewnorthWGL.Vec4.Normalize(
			null,
			[
				finish[0] - start[0],
				finish[1] - start[1],
				finish[2] - start[2],
				finish[3] - start[3]
			]
		);

		if(out === null) {
			return [
				finish[0] < start[0] ? Math.max(finish[0], start[0] + direction[0] * velocity) : Math.min(finish[0], start[0] + direction[0] * velocity),
				finish[1] < start[1] ? Math.max(finish[1], start[1] + direction[1] * velocity) : Math.min(finish[1], start[1] + direction[1] * velocity),
				finish[2] < start[2] ? Math.max(finish[2], start[2] + direction[2] * velocity) : Math.min(finish[2], start[2] + direction[2] * velocity),
				finish[3] < start[3] ? Math.max(finish[3], start[3] + direction[3] * velocity) : Math.min(finish[3], start[3] + direction[3] * velocity)
			]
		}

		out[0] = finish[0] < start[0] ? Math.max(finish[0], start[0] + direction[0] * velocity) : Math.min(finish[0], start[0] + direction[0] * velocity);
		out[1] = finish[1] < start[1] ? Math.max(finish[1], start[1] + direction[1] * velocity) : Math.min(finish[1], start[1] + direction[1] * velocity);
		out[2] = finish[2] < start[2] ? Math.max(finish[2], start[2] + direction[2] * velocity) : Math.min(finish[2], start[2] + direction[2] * velocity);
		out[3] = finish[3] < start[3] ? Math.max(finish[3], start[3] + direction[3] * velocity) : Math.min(finish[3], start[3] + direction[3] * velocity);
		return out;
	},
};
NewnorthWGL.Buffer1f = function(usage, data) {
	this.Buffer = Engine.GL.createBuffer();
	this.Usage = usage;
	this.Length = 0;

	if(data !== undefined) {
		this.SetData(data);
	}
};
NewnorthWGL.Buffer1f.prototype.SetData = function(data) {
	Engine.GL.bindBuffer(Engine.GL.ARRAY_BUFFER, this.Buffer);
	Engine.GL.bufferData(Engine.GL.ARRAY_BUFFER, new Float32Array(data), this.Usage);
	this.Length = data.length;
};
NewnorthWGL.Buffer1f.prototype.Activate = function(attribute) {
	Engine.GL.bindBuffer(Engine.GL.ARRAY_BUFFER, this.Buffer);
	Engine.GL.vertexAttribPointer(attribute, 1, Engine.GL.FLOAT, false, 0, 0);
	Engine.GL.enableVertexAttribArray(attribute);
};
NewnorthWGL.Buffer1f.prototype.Deactivate = function(attribute) {
	Engine.GL.disableVertexAttribArray(attribute);
};
NewnorthWGL.Buffer1f.prototype.Draw = function(method) {
	Engine.GL.drawArrays(method, 0, this.Length);
};
NewnorthWGL.Buffer2f = function(usage, data) {
	this.Buffer = Engine.GL.createBuffer();
	this.Usage = usage;
	this.Length = 0;

	if(data !== undefined) {
		this.SetData(data);
	}
};
NewnorthWGL.Buffer2f.prototype.SetData = function(data) {
	Engine.GL.bindBuffer(Engine.GL.ARRAY_BUFFER, this.Buffer);
	Engine.GL.bufferData(Engine.GL.ARRAY_BUFFER, new Float32Array(data), this.Usage);
	this.Length = data.length / 2;
};
NewnorthWGL.Buffer2f.prototype.Activate = function(attribute) {
	Engine.GL.bindBuffer(Engine.GL.ARRAY_BUFFER, this.Buffer);
	Engine.GL.vertexAttribPointer(attribute, 2, Engine.GL.FLOAT, false, 0, 0);
	Engine.GL.enableVertexAttribArray(attribute);
};
NewnorthWGL.Buffer2f.prototype.Deactivate = function(attribute) {
	Engine.GL.disableVertexAttribArray(attribute);
};
NewnorthWGL.Buffer2f.prototype.Draw = function(method) {
	Engine.GL.drawArrays(method, 0, this.Length);
};
NewnorthWGL.Buffer3f = function(usage, data) {
	this.Buffer = Engine.GL.createBuffer();
	this.Usage = usage;
	this.Length = 0;

	if(data !== undefined) {
		this.SetData(data);
	}
};
NewnorthWGL.Buffer3f.prototype.SetData = function(data) {
	Engine.GL.bindBuffer(Engine.GL.ARRAY_BUFFER, this.Buffer);
	Engine.GL.bufferData(Engine.GL.ARRAY_BUFFER, new Float32Array(data), this.Usage);
	this.Length = data.length / 3;
};
NewnorthWGL.Buffer3f.prototype.Activate = function(attribute) {
	Engine.GL.bindBuffer(Engine.GL.ARRAY_BUFFER, this.Buffer);
	Engine.GL.vertexAttribPointer(attribute, 3, Engine.GL.FLOAT, false, 0, 0);
	Engine.GL.enableVertexAttribArray(attribute);
};
NewnorthWGL.Buffer3f.prototype.Deactivate = function(attribute) {
	Engine.GL.disableVertexAttribArray(attribute);
};
NewnorthWGL.Buffer3f.prototype.Draw = function(method) {
	Engine.GL.drawArrays(method, 0, this.Length);
};
NewnorthWGL.EntityManager = function(data) {
	this.Priority = 0;
	this.Layer = 0;

	for(var key in data) {
		this[key] = data[key];
	}

	this.IsUpdating = false;
	this.Entities = [];
	this.AddedEntities = [];
	this.RemovedEntities = [];
};
NewnorthWGL.EntityManager.prototype.CreateEntity = function(type, data) {
	var entity = new type(data);
	this.AddEntity(entity);
	return entity;
};
NewnorthWGL.EntityManager.prototype.AddEntity = function(entity) {
	if(this.IsUpdating) {
		this.AddedEntities.push(entity);
	}
	else {
		entity.SetManager(this);
		this.Entities.push(entity);
	}
};
NewnorthWGL.EntityManager.prototype.RemoveEntity = function(entity) {
	if(this.IsUpdating) {
		this.RemovedEntities.push(entity)
	}
	else {
		var index = this.Entities.indexOf(entity);

		if(index != -1) {
			entity.SetManager(null);
			this.Entities.splice(index, 1);
		}
	}
};
NewnorthWGL.EntityManager.prototype.Update = function() {
	this.IsUpdating = true;

	for(var i = 0; i < this.Entities.length; ++i) {
		this.Entities[i].Update();
	}

	this.IsUpdating = false;
};
NewnorthWGL.EntityManager.prototype.PostUpdate = function() {
	this.RemoveQueuedEntities();

	this.AddQueuedEntities();

	for(var i = 0; i < this.Entities.length; ++i) {
		if(this.Entities[i].Transform !== undefined) {
			this.Entities[i].Transform.CreateMatrix();
		}
	}
};
NewnorthWGL.EntityManager.prototype.RemoveQueuedEntities = function() {
	for(var i = 0; i < this.RemovedEntities.length; ++i) {
		var index = this.Entities.indexOf(this.RemovedEntities[i]);

		if(index !== -1) {
			this.RemovedEntities[i].SetManager(null);
			this.Entities.splice(index, 1);
		}
	}

	this.RemovedEntities.length = 0;
};
NewnorthWGL.EntityManager.prototype.AddQueuedEntities = function() {
	for(var i = 0; i < this.AddedEntities.length; ++i) {
		this.AddedEntities[i].SetManager(this);
		this.Entities.push(this.AddedEntities[i]);
	}

	this.AddedEntities.length = 0;
};
NewnorthWGL.EntityManager.prototype.Render = function(transparent, camera, mode) {
	if(transparent) {
		for(var i = this.Entities.length - 1; 0 <= i; --i) {
			if(this.Entities[i].IsTransparent === true) {
				this.Entities[i].Render(camera, mode);
			}
		}
	}
	else
	{
		for(var i = 0; i < this.Entities.length; ++i) {
			if(this.Entities[i].IsTransparent === false) {
				this.Entities[i].Render(camera, mode);
			}
		}
	}
};
NewnorthWGL.Framebuffer = function(data) {
	this.Size = data.Size;
	this.Texture = Engine.GL.createTexture();
	this.Renderbuffer = Engine.GL.createRenderbuffer();
	this.Buffer = Engine.GL.createFramebuffer();

	Engine.GL.bindTexture(Engine.GL.TEXTURE_2D, this.Texture);
	Engine.GL.texParameteri(Engine.GL.TEXTURE_2D, Engine.GL.TEXTURE_WRAP_S, Engine.GL.CLAMP_TO_EDGE);
	Engine.GL.texParameteri(Engine.GL.TEXTURE_2D, Engine.GL.TEXTURE_WRAP_T, Engine.GL.CLAMP_TO_EDGE);
	Engine.GL.texParameteri(Engine.GL.TEXTURE_2D, Engine.GL.TEXTURE_MIN_FILTER, Engine.GL.LINEAR);
	Engine.GL.texParameteri(Engine.GL.TEXTURE_2D, Engine.GL.TEXTURE_MAG_FILTER, Engine.GL.LINEAR);
	Engine.GL.texImage2D(Engine.GL.TEXTURE_2D, 0, Engine.GL.RGBA, this.Size[0], this.Size[1], 0, Engine.GL.RGBA, Engine.GL.UNSIGNED_BYTE, null);
	Engine.GL.bindTexture(Engine.GL.TEXTURE_2D, null);

	Engine.GL.bindRenderbuffer(Engine.GL.RENDERBUFFER, this.Renderbuffer);
	Engine.GL.renderbufferStorage(Engine.GL.RENDERBUFFER, Engine.GL.DEPTH_COMPONENT16, this.Size[0], this.Size[1]);
	Engine.GL.bindRenderbuffer(Engine.GL.RENDERBUFFER, null);

	Engine.GL.bindFramebuffer(Engine.GL.FRAMEBUFFER, this.Buffer);
	Engine.GL.framebufferTexture2D(Engine.GL.FRAMEBUFFER, Engine.GL.COLOR_ATTACHMENT0, Engine.GL.TEXTURE_2D, this.Texture, 0);
	Engine.GL.framebufferRenderbuffer(Engine.GL.FRAMEBUFFER, Engine.GL.DEPTH_ATTACHMENT, Engine.GL.RENDERBUFFER, this.Renderbuffer);
	Engine.GL.bindFramebuffer(Engine.GL.FRAMEBUFFER, null);
};
NewnorthWGL.Framebuffer.prototype.SetSize = function(size) {
	this.Size = size;

	Engine.GL.bindTexture(Engine.GL.TEXTURE_2D, this.Texture);
	Engine.GL.texImage2D(Engine.GL.TEXTURE_2D, 0, Engine.GL.RGBA, this.Size[0], this.Size[1], 0, Engine.GL.RGBA, Engine.GL.UNSIGNED_BYTE, null);
	Engine.GL.bindTexture(Engine.GL.TEXTURE_2D, null);

	Engine.GL.bindRenderbuffer(Engine.GL.RENDERBUFFER, this.Renderbuffer);
	Engine.GL.renderbufferStorage(Engine.GL.RENDERBUFFER, Engine.GL.DEPTH_COMPONENT16, this.Size[0], this.Size[1]);
	Engine.GL.bindRenderbuffer(Engine.GL.RENDERBUFFER, null);
};
NewnorthWGL.Framebuffer.prototype.Bind = function() {
	Engine.GL.bindFramebuffer(Engine.GL.FRAMEBUFFER, this.Buffer);
};
NewnorthWGL.Framebuffer.prototype.Unbind = function() {
	Engine.GL.bindFramebuffer(Engine.GL.FRAMEBUFFER, null);
};
NewnorthWGL.Framebuffer.prototype.ReadPixels = function(x, y, w, h, type, size) {
	var pixels = new Uint8Array(w * h * size);

	Engine.GL.readPixels(x, this.Size[1] - y, w, h, type, Engine.GL.UNSIGNED_BYTE, pixels);

	return pixels;
};
NewnorthWGL.Mesh = function() {
	this.VertexBuffer = null;
	this.Buffers = {};
};
NewnorthWGL.Mesh.prototype.CreateVertexBuffer = function(type, usage, data) {
	this.VertexBuffer = new NewnorthWGL["Buffer" + type](usage, data);
};
NewnorthWGL.Mesh.prototype.SetVertexBuffer = function(data) {
	this.VertexBuffer.SetData(data);
};
NewnorthWGL.Mesh.prototype.CreateBuffer = function(attribute, type, usage, data) {
	this.Buffers[attribute] = new NewnorthWGL["Buffer" + type](usage, data);
};
NewnorthWGL.Mesh.prototype.SetBuffer = function(attribute, data) {
	this.Buffers[attribute].SetData(data);
};
NewnorthWGL.Mesh.prototype.Draw = function(program, method) {
	this.VertexBuffer.Activate(program.aPosition);

	for(var attribute in this.Buffers) {
		this.Buffers[attribute].Activate(program[attribute]);
	}

	this.VertexBuffer.Draw(method);

	for(var attribute in this.Buffers) {
		this.Buffers[attribute].Deactivate(program[attribute]);
	}

	this.VertexBuffer.Deactivate(program.aPosition);
};
NewnorthWGL.Mesh.CreatePlane3f = function(options) {
	var mesh = new NewnorthWGL.Mesh();
	var position = options.position === undefined ? [0, 0, 0] : options.position;
	var size = options.size === undefined ? [1, 1] : options.size;
	var applyTexCoords = Newnorth.Either(options.applyTexCoords, false);

	vertices = [
		[- 0.5 * size[0], + 0.5 * size[0]],
		[+ 0.5 * size[1], - 0.5 * size[1]],
		0,
	];

	vertices = {
		topLeft: [vertices[0][0], vertices[1][0], vertices[2]],
		topRight: [vertices[0][1], vertices[1][0], vertices[2]],
		bottomLeft: [vertices[0][0], vertices[1][1], vertices[2]],
		bottomRight: [vertices[0][1], vertices[1][1], vertices[2]],
	};

	NewnorthWGL.Vec3.Add(vertices.topLeft, vertices.topLeft, position);
	NewnorthWGL.Vec3.Add(vertices.topRight, vertices.topRight, position);
	NewnorthWGL.Vec3.Add(vertices.bottomLeft, vertices.bottomLeft, position);
	NewnorthWGL.Vec3.Add(vertices.bottomRight, vertices.bottomRight, position);

	mesh.CreateVertexBuffer("3f", Engine.GL.STATIC_DRAW);
	mesh.SetVertexBuffer([
		vertices.topLeft[0], vertices.topLeft[1], vertices.topLeft[2],
		vertices.topRight[0], vertices.topRight[1], vertices.topRight[2],
		vertices.bottomLeft[0], vertices.bottomLeft[1], vertices.bottomLeft[2],
		vertices.bottomRight[0], vertices.bottomRight[1], vertices.bottomRight[2],
		vertices.bottomLeft[0], vertices.bottomLeft[1], vertices.bottomLeft[2],
		vertices.topRight[0], vertices.topRight[1], vertices.topRight[2],
	]);

	if(applyTexCoords) {
		mesh.CreateBuffer(
			"aTexCoord", "2f", Engine.GL.STATIC_DRAW,
			[0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0]
		);
	}

	return mesh;
};
NewnorthWGL.Mesh.CreateCube = function(options) {
	var mesh = new NewnorthWGL.Mesh();
	var position = options.position === undefined ? [0, 0, 0] : options.position;
	var size = options.size === undefined ? 1 : options.size;

	var vertex = [
		[
			// Left
			position[0] - 0.5 * size,
			// Right
			position[0] + 0.5 * size
		],
		[
			// Top
			position[1] + 0.5 * size,
			// Bottom
			position[1] - 0.5 * size
		],
		[
			// Front
			position[2] + 0.5 * size,
			// Back
			position[2] - 0.5 * size,
		],
	];

	mesh.CreateVertexBuffer("3f", Engine.GL.STATIC_DRAW);
	mesh.SetVertexBuffer([
		// Front
		vertex[0][0], vertex[1][0], vertex[2][0],
		vertex[0][1], vertex[1][0], vertex[2][0],
		vertex[0][0], vertex[1][1], vertex[2][0],
		vertex[0][1], vertex[1][1], vertex[2][0],
		vertex[0][0], vertex[1][1], vertex[2][0],
		vertex[0][1], vertex[1][0], vertex[2][0],
		// Back
		vertex[0][1], vertex[1][0], vertex[2][1],
		vertex[0][0], vertex[1][0], vertex[2][1],
		vertex[0][1], vertex[1][1], vertex[2][1],
		vertex[0][0], vertex[1][1], vertex[2][1],
		vertex[0][1], vertex[1][1], vertex[2][1],
		vertex[0][0], vertex[1][0], vertex[2][1],
		// Left
		vertex[0][0], vertex[1][0], vertex[2][1],
		vertex[0][0], vertex[1][0], vertex[2][0],
		vertex[0][0], vertex[1][1], vertex[2][1],
		vertex[0][0], vertex[1][1], vertex[2][0],
		vertex[0][0], vertex[1][1], vertex[2][1],
		vertex[0][0], vertex[1][0], vertex[2][0],
		// Right
		vertex[0][1], vertex[1][0], vertex[2][0],
		vertex[0][1], vertex[1][0], vertex[2][1],
		vertex[0][1], vertex[1][1], vertex[2][0],
		vertex[0][1], vertex[1][1], vertex[2][1],
		vertex[0][1], vertex[1][1], vertex[2][0],
		vertex[0][1], vertex[1][0], vertex[2][1],
		// Top
		vertex[0][0], vertex[1][0], vertex[2][1],
		vertex[0][1], vertex[1][0], vertex[2][1],
		vertex[0][0], vertex[1][0], vertex[2][0],
		vertex[0][1], vertex[1][0], vertex[2][0],
		vertex[0][0], vertex[1][0], vertex[2][0],
		vertex[0][1], vertex[1][0], vertex[2][1],
		// Bottom
		vertex[0][1], vertex[1][1], vertex[2][1],
		vertex[0][0], vertex[1][1], vertex[2][1],
		vertex[0][1], vertex[1][1], vertex[2][0],
		vertex[0][0], vertex[1][1], vertex[2][0],
		vertex[0][1], vertex[1][1], vertex[2][0],
		vertex[0][0], vertex[1][1], vertex[2][1],
	]);

	return mesh;
};
NewnorthWGL.Program = function(handle) {
	this.Handle = handle;
};
NewnorthWGL.Program.prototype.Activate = function() {
	Engine.GL.useProgram(this.Handle);
};
NewnorthWGL.Program.prototype.Deactivate = function() {
	Engine.GL.useProgram(null);
};
NewnorthWGL.Program.prototype.Uniform1f = function(uniform, value) {
	Engine.GL.uniform1f(this[uniform], value);
};
NewnorthWGL.Program.prototype.Uniform2f = function(uniform, value) {
	Engine.GL.uniform2f(this[uniform], value[0], value[1]);
};
NewnorthWGL.Program.prototype.Uniform3f = function(uniform, value) {
	Engine.GL.uniform3f(this[uniform], value[0], value[1], value[2]);
};
NewnorthWGL.Program.prototype.Uniform4f = function(uniform, value) {
	Engine.GL.uniform4f(this[uniform], value[0], value[1], value[2], value[3]);
};
NewnorthWGL.Program.prototype.Uniform1i = function(uniform, value) {
	Engine.GL.uniform1i(this[uniform], value);
};
NewnorthWGL.Program.prototype.UniformM4fv = function(uniform, value) {
	Engine.GL.uniformMatrix4fv(this[uniform], false, value);
};
NewnorthWGL.Program.prototype.UniformTexture = function(uniform, position, texture) {
	Engine.GL.uniform1i(this[uniform], position);
	Engine.GL.activeTexture(Engine.GL.TEXTURE0 + position);
	Engine.GL.bindTexture(Engine.GL.TEXTURE_2D, texture);
};
NewnorthWGL.Scene = function(data) {
	this.IsVisible = true;
	this.IsPaused = false;

	for(var key in data) {
		this[key] = data[key];
	}

	this.Cameras = [];
	this.EntityManagers = [];
	this.Controls = [];
};
NewnorthWGL.Scene.prototype.CreateCamera = function(alias, type, data) {
	var camera = new type(this, data);
	this.Cameras.push(camera);
	return this.Cameras[alias] = camera;
};
NewnorthWGL.Scene.prototype.Camera = function(alias) {
	return this.Cameras[alias];
},
NewnorthWGL.Scene.prototype.CreateEntityManager = function(alias, data) {
	var manager = new NewnorthWGL.EntityManager(data);
	var inserted = false;

	for(var i = 0; i < this.EntityManagers.length; ++i) {
		if(this.EntityManagers[i].Priority < manager.Priority) {
			this.EntityManagers.splice(i, 0, manager);
			inserted = true;
			break;
		}
	}

	if(!inserted) {
		this.EntityManagers.push(manager);
	}

	return this.EntityManagers[alias] = manager;
};
NewnorthWGL.Scene.prototype.EntityManager = function(alias) {
	return this.EntityManagers[alias];
},
NewnorthWGL.Scene.prototype.CreateEntity = function(manager, type, options) {
	return this.EntityManagers[manager].CreateEntity(type, options);
};
NewnorthWGL.Scene.prototype.CreateControl = function(alias, type, data) {
	var control = new type(data);
	this.Controls.push(control);
	return this.Controls[alias] = control;
};
NewnorthWGL.Scene.prototype.Control = function(alias) {
	return this.Controls[alias];
},
NewnorthWGL.Scene.prototype.PreUpdate = function() {
	
};
NewnorthWGL.Scene.prototype.Update = function() {
	for(var i = 0; i < this.EntityManagers.length; ++i) {
		this.EntityManagers[i].Update();
	}
};
NewnorthWGL.Scene.prototype.PostUpdate = function() {
	for(var i = 0; i < this.Cameras.length; ++i) {
		this.Cameras[i].CreateMatrix();
		this.Cameras[i].Transform.CreateMatrix();
	}

	for(var i = 0; i < this.EntityManagers.length; ++i) {
		this.EntityManagers[i].PostUpdate();
	}
};
NewnorthWGL.Scene.prototype.PreRender = function() {
	
};
NewnorthWGL.Scene.prototype.Render = function() {
	Engine.GL.enable(Engine.GL.SCISSOR_TEST);

	for(var i = 0; i < this.Cameras.length; ++i) {
		if(this.Cameras[i].IsEnabled) {
			this.Cameras[i].Render();
		}
	}

	Engine.GL.disable(Engine.GL.SCISSOR_TEST);
	Engine.GL.viewport(0, 0, Engine.Canvas.width, Engine.Canvas.height);
	Engine.GL.clear(Engine.GL.DEPTH_BUFFER_BIT);
	Engine.GL.depthFunc(Engine.GL.LESS);

	for(var i = 0; i < this.Controls.length; ++i) {
		if(this.Controls[i].IsVisible) {
			this.Controls[i].Render();
		}
	}
};
NewnorthWGL.Scene.prototype.PostRender = function() {
	
};
NewnorthWGL.Entity = function(data) {
	this.Layer = Newnorth.Either(this.Layer, 0);
	this.Manager = null;
	this.Parent = null;
	this.Children = [];
	this.IsTransparent = false;

	for(var key in data) {
		this.SetData(key, data[key]);
	}

	if(this.Type === undefined) {
		throw "\"type\" not set!";
	}
};
NewnorthWGL.Entity.prototype.SetData = function(key, value) {
	switch(key) {
		case "Children":
			for(var i = 0; i < value.length; ++i) {
				this.AddChild(value[i]);
			}
			break;
		case "Transform":
			this.Transform.SetData(null, value);
			break;
		default:
			this[key] = value;
	}
};
NewnorthWGL.Entity.prototype.AddChild = function(child) {
	child.Parent = this;
	this.Children.push(child);
};
NewnorthWGL.Entity.prototype.SetManager = function(manager) {
	this.Manager = manager;
};
NewnorthWGL.Entity.prototype.Update = function() {
	
};
NewnorthWGL.Entity.prototype.Render = function(camera, mode) {
	
};
NewnorthWGL.Entity.prototype.Destroy = function() {
	this.Manager.RemoveEntity(this);
};
NewnorthWGL.CameraEntity = function(scene, data) {
	this.Scene = scene;
	this.Transform = new NewnorthWGL.CameraTransformComponent({Entity: this});
	this.Matrix = mat4.create();
	this.UpdateMatrix = true;
	this.ClearColor = [0, 0, 0, 1];
	this.CullMask = 0;
	this.Mode = "";
	this.IsEnabled = true;

	NewnorthWGL.Entity.call(this, data);

	if(this.Viewport === undefined) {
		throw "\"viewport\" not set!";
	}
};
NewnorthWGL.CameraEntity.prototype = Object.create(NewnorthWGL.Entity.prototype);
NewnorthWGL.CameraEntity.prototype.SetViewport = function(viewport) {
	this.Viewport = viewport;
};
NewnorthWGL.CameraEntity.prototype.Render = function(mode, framebuffer, viewport) {
	mode = Newnorth.Either(mode, this.Mode);
	viewport = Newnorth.Either(viewport, this.Viewport);

	if(framebuffer !== undefined) {
		var x = viewport[0];
		var y = framebuffer.Height - viewport[1] - viewport[3];
		var w = viewport[2];
		var h = viewport[3];
		framebuffer.Bind();
	}
	else {
		var x = viewport[0];
		var y = Engine.Canvas.height - viewport[1] - viewport[3];
		var w = viewport[2];
		var h = viewport[3];
	}

	Engine.GL.viewport(x, y, w, h);
	Engine.GL.scissor(x, y, w, h);
	Engine.GL.clearColor(this.ClearColor[0], this.ClearColor[1], this.ClearColor[2], this.ClearColor[3]);
	Engine.GL.clear(Engine.GL.COLOR_BUFFER_BIT | Engine.GL.DEPTH_BUFFER_BIT);

	// Render non-transparent entities.
	Engine.GL.depthFunc(Engine.GL.LESS);
	for(var i = 0; i < this.Scene.EntityManagers.length; ++i) {
		this.Scene.EntityManagers[i].Render(false, this, mode);
	}

	// Render transparent entities.
	Engine.GL.depthFunc(Engine.GL.LEQUAL);
	for(var i = this.Scene.EntityManagers.length - 1; 0 <= i; --i) {
		this.Scene.EntityManagers[i].Render(true, this, mode);
	}

	if(framebuffer !== undefined) {
		framebuffer.Unbind();
	}
};
NewnorthWGL.OrthographicCameraEntity = function(scene, data) {
	this.Type = "NewnorthWGL.OrthographicCameraEntity";

	NewnorthWGL.CameraEntity.call(this, scene, data);

	if(this.Rect === undefined) {
		throw "\"rect\" not set!";
	}

	if(this.Near === undefined) {
		throw "\"near\" not set!";
	}

	if(this.Far === undefined) {
		throw "\"far\" not set!";
	}
};
NewnorthWGL.OrthographicCameraEntity.prototype = Object.create(NewnorthWGL.CameraEntity.prototype);
NewnorthWGL.OrthographicCameraEntity.prototype.CreateMatrix = function() {
	if(this.UpdateMatrix) {
		mat4.ortho(this.Matrix, this.Rect[0], this.Rect[1], this.Rect[2], this.Rect[3], this.Near, this.Far);
		this.UpdateMatrix = false;
	}
};
NewnorthWGL.PerspectiveCameraEntity = function(scene, data) {
	this.Type = "NewnorthWGL.PerspectiveCameraEntity";

	NewnorthWGL.CameraEntity.call(this, scene, data);

	if(this.FOV === undefined) {
		throw "\"FOV\" not set!";
	}

	if(this.AspectRatio === undefined) {
		throw "\"AspectRatio\" not set!";
	}

	if(this.Near === undefined) {
		throw "\"Near\" not set!";
	}

	if(this.Far === undefined) {
		throw "\"Far\" not set!";
	}
};
NewnorthWGL.PerspectiveCameraEntity.prototype = Object.create(NewnorthWGL.CameraEntity.prototype);
NewnorthWGL.PerspectiveCameraEntity.prototype.CreateMatrix = function() {
	if(this.UpdateMatrix) {
		mat4.perspective(this.Matrix, this.FOV, this.AspectRatio, this.Near, this.Far);
		this.UpdateMatrix = false;
	}
};
NewnorthWGL.PerspectiveCameraEntity.prototype.SetFOV = function(fov) {
	this.FOV = fov;
	this.UpdateMatrix = true;
};
NewnorthWGL.PerspectiveCameraEntity.prototype.SetAspectRatio = function(aspectRatio) {
	this.AspectRatio = aspectRatio;
	this.UpdateMatrix = true;
};
NewnorthWGL.PerspectiveCameraEntity.prototype.SetNear = function(near) {
	this.Near = near;
	this.UpdateMatrix = true;
};
NewnorthWGL.PerspectiveCameraEntity.prototype.SetFar = function(far) {
	this.Far = far;
	this.UpdateMatrix = true;
};
NewnorthWGL.Control = function(data) {
	this.Parent = null;
	this.Position = [0, 0];
	this.Size = [0, 0];
	this.IsVisible = true;

	for(var key in data) {
		this.SetData(key, data[key]);
	}
};
NewnorthWGL.Control.prototype.SetData = function(key, value) {
	this[key] = value;
};
NewnorthWGL.Control.prototype.Update = function() {
	
};
NewnorthWGL.Control.prototype.Render = function() {
	
};
NewnorthWGL.Control.prototype.GetAbsolutePosition = function() {
	var position = NewnorthWGL.Vec2.Clone(this.Position);
	var parent = this.Parent;

	while(parent !== null) {
		position[0] += parent.position[0];
		position[1] += parent.position[1];
		parent = parent.parent;
	}

	return position;
};
NewnorthWGL.Control.prototype.GetProgramPosition = function() {
	var position = this.GetAbsolutePosition();

	return [
		position[0] / Engine.Canvas.width * 2 - 1,
		1 - (position[1] + this.Size[1]) / Engine.Canvas.height * 2,
	];
};
NewnorthWGL.Control.prototype.GetProgramSize = function() {
	return [
		this.Size[0] / Engine.Canvas.width * 2,
		this.Size[1] / Engine.Canvas.height * 2,
	];
};
NewnorthWGL.ImageControl = function(data) {
	this.Image = null;

	NewnorthWGL.Control.call(this, data);
};
NewnorthWGL.ImageControl.prototype = Object.create(NewnorthWGL.Control.prototype);
NewnorthWGL.ImageControl.prototype.Render = function() {
	var program = Engine.Program("GUI/ImageControl");

	program.Activate();

	program.Uniform2f("uPosition", this.GetProgramPosition());
	program.Uniform2f("uSize", this.GetProgramSize());
	program.UniformTexture("uTexture", 0, this.Image);

	NewnorthWGL.Control.VertexBuffer.Activate(program.aPosition);
	NewnorthWGL.Control.VertexBuffer.Draw(Engine.GL.TRIANGLE_STRIP);
	NewnorthWGL.Control.VertexBuffer.Deactivate(program.aPosition);

	program.Deactivate();
};
NewnorthWGL.PlaceHolderControl = function(data) {
	NewnorthWGL.Control.call(this, data);

	this.Children = [];
};
NewnorthWGL.PlaceHolderControl.prototype = Object.create(NewnorthWGL.Control.prototype);
NewnorthWGL.PlaceHolderControl.prototype.AddChild = function(child) {
	child.Parent = this;
	this.Children.push(child);
};
NewnorthWGL.PlaceHolderControl.prototype.Update = function() {
	for(var i = 0; i < this.Children.length; ++i) {
		if(!this.Children[i].IsPaused) {
			this.Children[i].Update();
		}
	}
};
NewnorthWGL.PlaceHolderControl.prototype.Render = function() {
	for(var i = 0; i < this.Children.length; ++i) {
		if(this.Children[i].IsVisible) {
			this.Children[i].Render();
		}
	}
};
NewnorthWGL.Component = function(data) {
	for(var key in data) {
		this.SetData(key, data[key]);
	}

	if(this.Entity === undefined) {
		throw "Entity not set!";
	}
};
NewnorthWGL.Component.prototype.SetData = function(key, value) {
	this[key] = value;
};
NewnorthWGL.Component.prototype.Update = function() {
	
};
NewnorthWGL.PhysicsComponent = function(data) {
	this.Velocity = [0, 0, 0];

	NewnorthWGL.Component.call(this, data);
};
NewnorthWGL.PhysicsComponent.prototype = Object.create(NewnorthWGL.Component.prototype);
NewnorthWGL.PhysicsComponent.prototype.SetVelocity = function(velocity) {
	this.Velocity[0] = velocity[0];
	this.Velocity[1] = velocity[1];
	this.Velocity[2] = velocity[2];
};
NewnorthWGL.PhysicsComponent.prototype.SetVelocityX = function(velocity) {
	this.Velocity[0] = velocity;
};
NewnorthWGL.PhysicsComponent.prototype.SetVelocityY = function(velocity) {
	this.Velocity[1] = velocity;
};
NewnorthWGL.PhysicsComponent.prototype.SetVelocityZ = function(velocity) {
	this.Velocity[2] = velocity;
};
NewnorthWGL.PhysicsComponent.prototype.AdjustVelocity = function(velocity) {
	this.Velocity[0] += velocity[0];
	this.Velocity[1] += velocity[1];
	this.Velocity[2] += velocity[2];
};
NewnorthWGL.PhysicsComponent.prototype.AdjustVelocityX = function(velocity) {
	this.Velocity[0] += velocity;
};
NewnorthWGL.PhysicsComponent.prototype.AdjustVelocityY = function(velocity) {
	this.Velocity[1] += velocity;
};
NewnorthWGL.PhysicsComponent.prototype.AdjustVelocityZ = function(velocity) {
	this.Velocity[2] += velocity;
};
NewnorthWGL.PhysicsComponent.prototype.Update = function(time) {
	time = Newnorth.Either(time, Engine.TimeElapsed);

	this.Entity.Transform.Translate([
		this.Velocity[0] * time,
		this.Velocity[1] * time,
		this.Velocity[2] * time
	]);
};
NewnorthWGL.TransformComponent = function(data) {
	this.Matrix = mat4.create();
	this.UpdateMatrix = true;
	this.Position = [0, 0, 0];
	this.AbsolutePosition = NewnorthWGL.Vec3.Clone(this.Position);
	this.InheritPosition = true;
	this.Rotation = [0, 0, 0];
	this.AbsoluteRotation = NewnorthWGL.Vec3.Clone(this.Rotation);
	this.InheritRotation = true;
	this.Scale = [1, 1, 1];
	this.AbsoluteScale = NewnorthWGL.Vec3.Clone(this.Scale);
	this.InheritScale = true;

	NewnorthWGL.Component.call(this, data);
};
NewnorthWGL.TransformComponent.prototype = Object.create(NewnorthWGL.Component.prototype);
NewnorthWGL.TransformComponent.prototype.SetData = function(key, value) {
	if(key === null) {
		for(var key in value) {
			this.SetData(key, value[key]);
		}
	}
	else {
		switch(key) {
			case "Position":
				this.SetPosition(value);
				break;
			case "Rotation":
				this.SetRotation(value);
				break;
			case "Scale":
				this.SetScale(value);
				break;
			default:
				NewnorthWGL.Component.prototype.SetData.call(this, key, value);
				break
		}
	}
};
NewnorthWGL.TransformComponent.prototype.CreateMatrix = function() {
	if(this.UpdateMatrix) {
		mat4.identity(this.Matrix);
		mat4.translate(this.Matrix, this.Matrix, this.Position);
		mat4.rotate(this.Matrix, this.Matrix, this.Rotation[0], [-1, 0, 0]);
		mat4.rotate(this.Matrix, this.Matrix, this.Rotation[1], [0, -1, 0]);
		mat4.rotate(this.Matrix, this.Matrix, this.Rotation[2], [0, 0, -1]);
		mat4.scale(this.Matrix, this.Matrix, this.Scale);
		this.UpdateMatrix = false;
	}
};
NewnorthWGL.TransformComponent.prototype.GetPosition = function() {
	return this.InheritPosition ? this.AbsolutePosition : this.Position;
};
NewnorthWGL.TransformComponent.prototype.GetPositionX = function() {
	return this.InheritPosition ? this.AbsolutePosition[0] : this.Position[0];
};
NewnorthWGL.TransformComponent.prototype.GetPositionY = function() {
	return this.InheritPosition ? this.AbsolutePosition[1] : this.Position[1];
};
NewnorthWGL.TransformComponent.prototype.GetPositionZ = function() {
	return this.InheritPosition ? this.AbsolutePosition[2] : this.Position[2];
};
NewnorthWGL.TransformComponent.prototype.SetPosition = function(position) {
	this.AdjustAbsolutePosition([
		position[0] - this.Position[0],
		position[1] - this.Position[1],
		position[2] - this.Position[2]
	]);
	this.Position[0] = position[0];
	this.Position[1] = position[1];
	this.Position[2] = position[2];
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.SetPositionX = function(position) {
	this.AdjustAbsolutePosition([position[0] - this.Position[0], 0, 0]);
	this.Position[0] = position;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.SetPositionY = function(position) {
	this.AdjustAbsolutePosition([0, position[1] - this.Position[1], 0]);
	this.Position[1] = position;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.SetPositionZ = function(position) {
	this.AdjustAbsolutePosition([0, 0, position[2] - this.Position[2]]);
	this.Position[2] = position;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.TransitionToPosition = function(position, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	NewnorthWGL.Vec3.Transition(position, this.Position, position, velocity);
	this.SetPosition(position);
};
NewnorthWGL.TransformComponent.prototype.TransitionToPositionX = function(position, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	position = NewnorthWGL.Float.Transition(this.Position, position, velocity);
	this.SetPositionX(position);
};
NewnorthWGL.TransformComponent.prototype.TransitionToPositionY = function(position, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	position = NewnorthWGL.Float.Transition(this.Position, position, velocity);
	this.SetPositionY(position);
};
NewnorthWGL.TransformComponent.prototype.TransitionToPositionZ = function(position, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	position = NewnorthWGL.Float.Transition(this.Position, position, velocity);
	this.SetPositionZ(position);
};
NewnorthWGL.TransformComponent.prototype.AdjustPosition = function(distance) {
	this.AdjustAbsolutePosition(distance);
	this.Position[0] += distance[0];
	this.Position[1] += distance[1];
	this.Position[2] += distance[2];
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustPositionX = function(distance) {
	this.AdjustAbsolutePosition([distance, 0, 0]);
	this.Position[0] += distance;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustPositionY = function(distance) {
	this.AdjustAbsolutePosition([0, distance, 0]);
	this.Position[1] += distance;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustPositionZ = function(distance) {
	this.AdjustAbsolutePosition([0, 0, distance]);
	this.Position[2] += distance;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustAbsolutePosition = function(change) {
	this.AbsolutePosition[0] += change[0];
	this.AbsolutePosition[1] += change[1];
	this.AbsolutePosition[2] += change[2];

	for(var i = 0; i < this.Entity.Children.length; ++i) {
		if(this.Entity.Children[i].Transform !== undefined) {
			this.Entity.Children[i].Transform.AdjustAbsolutePosition(change);
		}
	}

	if(this.InheritPosition) {
		this.UpdateMatrix = true;
	}
};
NewnorthWGL.TransformComponent.prototype.GetRotation = function() {
	return this.InheritRotation ? this.AbsoluteRotation : this.Rotation;
};
NewnorthWGL.TransformComponent.prototype.GetRotationX = function() {
	return this.InheritRotation ? this.AbsoluteRotation[0] : this.Rotation[0];
};
NewnorthWGL.TransformComponent.prototype.GetRotationY = function() {
	return this.InheritRotation ? this.AbsoluteRotation[1] : this.Rotation[1];
};
NewnorthWGL.TransformComponent.prototype.GetRotationZ = function() {
	return this.InheritRotation ? this.AbsoluteRotation[2] : this.Rotation[2];
};
NewnorthWGL.TransformComponent.prototype.SetRotation = function(rotation) {
	this.AdjustAbsoluteRotation([
		rotation[0] - this.Rotation[0],
		rotation[1] - this.Rotation[1],
		rotation[2] - this.Rotation[2]
	]);
	this.Rotation[0] = rotation[0];
	this.Rotation[1] = rotation[1];
	this.Rotation[2] = rotation[2];
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.SetRotationX = function(rotation) {
	this.AdjustAbsoluteRotation([rotation[0] - this.Rotation[0], 0, 0]);
	this.Rotation[0] = rotation;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.SetRotationY = function(rotation) {
	this.AdjustAbsoluteRotation([0, rotation[1] - this.Rotation[1], 0]);
	this.Rotation[1] = rotation;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.SetRotationZ = function(rotation) {
	this.AdjustAbsoluteRotation([0, 0, rotation[2] - this.Rotation[2]]);
	this.Rotation[2] = rotation;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.TransitionToRotation = function(rotation, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	NewnorthWGL.Vec3.Transition(rotation, this.Rotation, rotation, velocity);
	this.SetRotation(rotation);
};
NewnorthWGL.TransformComponent.prototype.TransitionToRotationX = function(rotation, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	rotation = NewnorthWGL.Float.Transition(this.Rotation, rotation, velocity);
	this.SetRotationX(rotation);
};
NewnorthWGL.TransformComponent.prototype.TransitionToRotationY = function(rotation, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	rotation = NewnorthWGL.Float.Transition(this.Rotation, rotation, velocity);
	this.SetRotationY(rotation);
};
NewnorthWGL.TransformComponent.prototype.TransitionToRotationZ = function(rotation, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	rotation = NewnorthWGL.Float.Transition(this.Rotation, rotation, velocity);
	this.SetRotationZ(rotation);
};
NewnorthWGL.TransformComponent.prototype.AdjustRotation = function(rotation) {
	this.AdjustAbsoluteRotation(rotation);
	this.Rotation[0] += rotation[0];
	this.Rotation[1] += rotation[1];
	this.Rotation[2] += rotation[2];
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustRotationX = function(rotation) {
	this.AdjustAbsoluteRotation([rotation, 0, 0]);
	this.Rotation[0] += rotation;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustRotationY = function(rotation) {
	this.AdjustAbsoluteRotation([0, rotation, 0]);
	this.Rotation[1] += rotation;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustRotationZ = function(rotation) {
	this.AdjustAbsoluteRotation([0, 0, rotation]);
	this.Rotation[2] += rotation;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustAbsoluteRotation = function(change) {
	this.AbsoluteRotation[0] += change[0];
	this.AbsoluteRotation[1] += change[1];
	this.AbsoluteRotation[2] += change[2];

	for(var i = 0; i < this.Entity.Children.length; ++i) {
		if(this.Entity.Children[i].Transform !== undefined) {
			this.Entity.Children[i].Transform.AdjustAbsoluteRotation(change);
		}
	}

	if(this.InheritRotation) {
		this.UpdateMatrix = true;
	}
};
NewnorthWGL.TransformComponent.prototype.GetScale = function() {
	return this.InheritScale ? this.AbsoluteScale : this.Scale;
};
NewnorthWGL.TransformComponent.prototype.GetScaleX = function() {
	return this.InheritScale ? this.AbsoluteScale[0] : this.Scale[0];
};
NewnorthWGL.TransformComponent.prototype.GetScaleY = function() {
	return this.InheritScale ? this.AbsoluteScale[1] : this.Scale[1];
};
NewnorthWGL.TransformComponent.prototype.GetScaleZ = function() {
	return this.InheritScale ? this.AbsoluteScale[2] : this.Scale[2];
};
NewnorthWGL.TransformComponent.prototype.SetScale = function(scale) {
	this.AdjustAbsoluteScale([
		scale[0] - this.Scale[0],
		scale[1] - this.Scale[1],
		scale[2] - this.Scale[2]
	]);
	this.Scale[0] = scale[0];
	this.Scale[1] = scale[1];
	this.Scale[2] = scale[2];
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.SetScaleX = function(scale) {
	this.AdjustAbsoluteScale([scale[0] - this.Scale[0], 0, 0]);
	this.Scale[0] = scale;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.SetScaleY = function(scale) {
	this.AdjustAbsoluteScale([0, scale[1] - this.Scale[1], 0]);
	this.Scale[1] = scale;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.SetScaleZ = function(scale) {
	this.AdjustAbsoluteScale([0, 0, scale[2] - this.Scale[2]]);
	this.Scale[2] = scale;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.TransitionToScale = function(scale, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	NewnorthWGL.Vec3.Transition(scale, this.Scale, scale, velocity);
	this.SetScale(scale);
};
NewnorthWGL.TransformComponent.prototype.TransitionToScaleX = function(scale, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	scale = NewnorthWGL.Float.Transition(this.Scale, scale, velocity);
	this.SetScaleX(scale);
};
NewnorthWGL.TransformComponent.prototype.TransitionToScaleY = function(scale, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	scale = NewnorthWGL.Float.Transition(this.Scale, scale, velocity);
	this.SetScaleY(scale);
};
NewnorthWGL.TransformComponent.prototype.TransitionToScaleZ = function(scale, velocity, time) {
	velocity = velocity * Newnorth.Either(time, Engine.TimeElapsed);
	scale = NewnorthWGL.Float.Transition(this.Scale, scale, velocity);
	this.SetScaleZ(scale);
};
NewnorthWGL.TransformComponent.prototype.AdjustScale = function(scale) {
	this.AdjustAbsoluteScale(scale);
	this.Scale[0] += scale[0];
	this.Scale[1] += scale[1];
	this.Scale[2] += scale[2];
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustScaleX = function(scale) {
	this.AdjustAbsoluteScale([scale, 0, 0]);
	this.Scale[0] += scale;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustScaleY = function(scale) {
	this.AdjustAbsoluteScale([0, scale, 0]);
	this.Scale[1] += scale;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustScaleZ = function(scale) {
	this.AdjustAbsoluteScale([0, 0, scale]);
	this.Scale[2] += scale;
	this.UpdateMatrix = true;
};
NewnorthWGL.TransformComponent.prototype.AdjustAbsoluteScale = function(change) {
	this.AbsoluteScale[0] += change[0];
	this.AbsoluteScale[1] += change[1];
	this.AbsoluteScale[2] += change[2];

	for(var i = 0; i < this.Entity.Children.length; ++i) {
		if(this.Entity.Children[i].Transform !== undefined) {
			this.Entity.Children[i].Transform.AdjustAbsoluteScale(change);
		}
	}

	if(this.InheritScale) {
		this.UpdateMatrix = true;
	}
};
NewnorthWGL.CameraTransformComponent = function(data) {
	NewnorthWGL.TransformComponent.call(this, data);
};
NewnorthWGL.CameraTransformComponent.prototype = Object.create(NewnorthWGL.TransformComponent.prototype);
NewnorthWGL.CameraTransformComponent.prototype.CreateMatrix = function() {
	if(this.UpdateMatrix) {
		mat4.identity(this.Matrix);

		if(this.Entity.Parent !== null) {
			if(this.InheritPosition) {
				var position = this.Entity.Parent.Transform.AbsolutePosition;
				mat4.translate(this.Matrix, this.Matrix, position);
			}

			if(this.InheritRotation) {
				var rotation = this.Entity.Parent.Transform.AbsoluteRotation;
				mat4.rotate(this.Matrix, this.Matrix, rotation[2], [0, 0, -1]);
				mat4.rotate(this.Matrix, this.Matrix, rotation[1], [0, -1, 0]);
				mat4.rotate(this.Matrix, this.Matrix, rotation[0], [-1, 0, 0]);
			}
		}

		mat4.rotate(this.Matrix, this.Matrix, this.Rotation[2], [ 0,  0, -1]);
		mat4.rotate(this.Matrix, this.Matrix, this.Rotation[1], [ 0, -1,  0]);
		mat4.rotate(this.Matrix, this.Matrix, this.Rotation[0], [-1,  0,  0]);
		mat4.invert(this.Matrix, this.Matrix);
		mat4.translate(this.Matrix, this.Matrix, this.Position);
		this.UpdateMatrix = false;
	}
};
Engine = {
	// Canvas
	Canvas: null,
	GetCanvasPosition: function() {
		var position = [Engine.Canvas.offsetLeft, Engine.Canvas.offsetTop];
		var parent = Engine.Canvas.offsetParent;

		while(parent !== null) {
			position[0] += parent.offsetLeft;
			position[1] += parent.offsetTop;
			parent = parent.offsetParent;
		}

		return position;
	},
	GetCanvasPositionX: function() {
		var position = Engine.Canvas.offsetLeft;
		var parent = Engine.Canvas.offsetParent;

		while(parent !== null) {
			position += parent.offsetLeft;
			parent = parent.offsetParent;
		}

		return position;
	},
	GetCanvasPositionY: function() {
		var position = Engine.Canvas.offsetTop;
		var parent = Engine.Canvas.offsetParent;

		while(parent !== null) {
			position += parent.offsetTop;
			parent = parent.offsetParent;
		}

		return position;
	},
	GetCanvasSize: function() {
		return [Engine.Canvas.width, Engine.Canvas.height];
	},
	GetCanvasSizeOverTwo: function() {
		return [Engine.Canvas.width / 2, Engine.Canvas.height / 2];
	},
	SetCanvasSize: function(width, height) {
		Engine.Canvas.width = width;
		Engine.Canvas.height = height;

		Engine.OnCanvasResize();

		if(Application.OnCanvasResize !== undefined) {
			Application.OnCanvasResize();
		}
	},
	// 2D
	Canvas2D: null,
	Context2D: null,
	DrawText: function(texture, width, height, x, y, text, options) {
		if(texture === null) {
			texture = Engine.GL.createTexture();
		}

		Engine.Canvas2D.width = width;
		Engine.Canvas2D.height = height;

		for(var key in options) {
			if(key === "fillText") {
				continue;
			}

			if(key === "strokeText") {
				continue;
			}

			Engine.Context2D[key] = options[key];
		}

		if(options.strokeText === true) {
			Engine.Context2D.strokeText(text, x, y);
		}

		if(options.fillText === true) {
			Engine.Context2D.fillText(text, x, y);
		}

		Engine.GL.pixelStorei(Engine.GL.UNPACK_FLIP_Y_WEBGL, false);
		Engine.GL.bindTexture(Engine.GL.TEXTURE_2D, texture);
		Engine.GL.texImage2D(Engine.GL.TEXTURE_2D, 0, Engine.GL.RGBA, Engine.GL.RGBA, Engine.GL.UNSIGNED_BYTE, Engine.Canvas2D);
		Engine.GL.texParameteri(Engine.GL.TEXTURE_2D, Engine.GL.TEXTURE_MAG_FILTER, Engine.GL.LINEAR);
		Engine.GL.texParameteri(Engine.GL.TEXTURE_2D, Engine.GL.TEXTURE_MIN_FILTER, Engine.GL.LINEAR);
		Engine.GL.generateMipmap(Engine.GL.TEXTURE_2D);
		Engine.GL.bindTexture(Engine.GL.TEXTURE_2D, null);

		return texture;
	},
	// WebGL
	GL: null,
	// Lifecycle
	TimeStarted: 0,
	PreviousTime: 0,
	Time: 0,
	TimeElapsed: 0,
	IsPaused: false,
	Run: function() {
		if(Engine.Canvas === null) {
			alert("Engine.Canvas is not set!");
			return;
		}

		Engine.Canvas2D = document.createElement("canvas");
		Engine.Context2D = Engine.Canvas2D.getContext("2d");

		Engine.GL = Engine.Canvas.getContext("experimental-webgl");

		if(Engine.GL === null) {
			alert("Unable to initialize WebGL!");
			return;
		}

		Engine.Initialize();

		if(Application.Initialize !== undefined) {
			Application.Initialize();
		}

		setInterval("Engine.Frame()", 16);
	},
	Initialize: function() {
		Engine.Keyboard.Initialize();
		Engine.Mouse.Initialize();

		NewnorthWGL.Control.VertexBuffer = new NewnorthWGL.Buffer2f(Engine.GL.STATIC_DRAW, [0, 0, 1, 0, 0, 1, 1, 1]);
	},
	Frame: function() {
		var time = new Date().getTime() / 1000;
		if(Engine.TimeStarted === 0) {
			Engine.TimeStarted = time;
		}
		else {
			Engine.PreviousTime = Engine.Time;
			Engine.Time = time - Engine.TimeStarted;
			Engine.TimeElapsed = Engine.Time - Engine.PreviousTime;
		}

		if(!Engine.IsPaused) {
			Engine.Update();
			Engine.Render();
		}
	},
	Update: function() {
		Engine.Keyboard.Update();
		Engine.Mouse.Update();

		for(var i = 0; i < Engine.Scenes.length; ++i) {
			if(!Engine.Scenes[i].IsPaused) {
				Engine.Scenes[i].PreUpdate();
			}
		}

		if(Application.PreUpdate !== undefined) {
			Application.PreUpdate();
		}

		for(var i = 0; i < Engine.Scenes.length; ++i) {
			if(!Engine.Scenes[i].IsPaused) {
				Engine.Scenes[i].Update();
			}
		}

		if(Application.Update !== undefined) {
			Application.Update();
		}

		for(var i = 0; i < Engine.Scenes.length; ++i) {
			if(!Engine.Scenes[i].IsPaused) {
				Engine.Scenes[i].PostUpdate();
			}
		}

		if(Application.PostUpdate !== undefined) {
			Application.PostUpdate();
		}
	},
	Render: function() {
		for(var i = 0; i < Engine.Scenes.length; ++i) {
			if(Engine.Scenes[i].IsVisible) {
				Engine.Scenes[i].PreRender();
			}
		}

		if(Application.PreRender !== undefined) {
			Application.PreRender();
		}

		for(var i = 0; i < Engine.Scenes.length; ++i) {
			if(Engine.Scenes[i].IsVisible) {
				Engine.Scenes[i].Render();
			}
		}

		if(Application.Render !== undefined) {
			Application.Render();
		}

		for(var i = 0; i < Engine.Scenes.length; ++i) {
			if(Engine.Scenes[i].IsVisible) {
				Engine.Scenes[i].PostRender();
			}
		}

		if(Application.PostRender !== undefined) {
			Application.PostRender();
		}
	},
	// Events
	OnCanvasResize: function() {
		
	},
	// Keyboard (More in Engine.Keyboard.js)
	IsKeyPressed: function(keyCode) {
		return Engine.Keyboard.State[2][keyCode] !== true && Engine.Keyboard.State[1][keyCode] === true;
	},
	IsKeyDown: function(keyCode) {
		return Engine.Keyboard.State[1][keyCode] === true;
	},
	IsKeyUp: function(keyCode) {
		return Engine.Keyboard.State[1][keyCode] !== true;
	},
	IsKeyReleased: function(keyCode) {
		return Engine.Keyboard.State[2][keyCode] === true && Engine.Keyboard.State[1][keyCode] !== true;
	},
	// Mouse (More in Engine.Mouse.js)
	GetMousePositionX: function() {
		return Engine.Mouse.State[1].Position[0];
	},
	GetMousePositionY: function() {
		return Engine.Mouse.State[1].Position[1];
	},
	IsLeftMouseButtonPressed: function() {
		return Engine.Mouse.State[2].Buttons[0] !== true && Engine.Mouse.State[1].Buttons[0] === true;
	},
	IsLeftMouseButtonDown: function() {
		return Engine.Mouse.State[1].Buttons[0] === true;
	},
	IsLeftMouseButtonUp: function() {
		return Engine.Mouse.State[1].Buttons[0] !== true;
	},
	IsLeftMouseButtonReleased: function() {
		return Engine.Mouse.State[2].Buttons[0] === true && Engine.Mouse.State[1].Buttons[0] !== true;
	},
	// Programs
	Programs: {},
	CreateProgram: function(alias, vs, fs, variables) {
		var handle = Engine.GL.createProgram();
		Engine.GL.attachShader(handle, vs);
		Engine.GL.attachShader(handle, fs);
		Engine.GL.linkProgram(handle);

		if(!Engine.GL.getProgramParameter(handle, Engine.GL.LINK_STATUS)) {
			throw "Unable to link program (" + alias + ").";
		}

		var program = new NewnorthWGL.Program(handle);

		for(var i = 0; i < variables.length; ++i) {
			var name = variables[i];
			var type = name.charAt(0);

			if(type === 'a') {
				var value = Engine.GL.getAttribLocation(handle, name);

				if(value === -1) {
					throw "Attribute \"" + name + "\" not found.";
				}
			}
			else if(type === 'u') {
				var value = Engine.GL.getUniformLocation(handle, name);

				if(value === null) {
					throw "Uniform \"" + name + "\" not found.";
				}
			}
			else
			{
				throw "Unknown type \"" + type + "\" for variable \"" + name + "\".";
			}

			program[name] = value;
		}

		Engine.Programs[alias] = program;
	},
	LoadProgram: function(alias, uri) {
		try {
			var data = Newnorth.AJAX.GetJSON(uri);
		}
		catch(exception) {
			throw "Unable to load program (" + uri + ").\n" + exception;
		}

		try {
			var vs = Engine.LoadShader(Engine.GL.VERTEX_SHADER, data.VSUri);
		}
		catch(exception) {
			throw "Unable to load vertex shader (" + uri + ").\n" + exception;
		}

		try {
			var fs = Engine.LoadShader(Engine.GL.FRAGMENT_SHADER, data.FSUri);
		}
		catch(exception) {
			throw "Unable to load fragment shader (" + uri + ").\n" + exception;
		}

		try {
			Engine.CreateProgram(alias, vs, fs, data.Variables);
		}
		catch(exception) {
			throw "Unable to create program (" + uri + ").\n" + exception;
		}
	},
	CreateShader: function(type, code) {
		var shader = Engine.GL.createShader(type);
		Engine.GL.shaderSource(shader, code);
		Engine.GL.compileShader(shader);

		if(!Engine.GL.getShaderParameter(shader, Engine.GL.COMPILE_STATUS)) {
			throw "Unable to compile shader.";
		}

		return shader;
	},
	LoadShader: function(type, uri) {
		try {
			var code = Newnorth.AJAX.GetText(uri);
		}
		catch(exception) {
			throw "Unable to load shader via HTTP (" + uri + ").\n" + exception;
		}

		try {
			return Engine.CreateShader(type, code);
		}
		catch(exception)
		{
			throw "Unable to create shader (" + uri + ").\n" + exception;
		}
	},
	Program: function(alias) {
		return Engine.Programs[alias];
	},
	// Scenes
	Scenes: [],
	CreateScene: function(alias, type, options) {
		var scene = new type(options);
		Engine.Scenes.push(scene);
		Engine.Scenes[alias] = scene;
		return scene;
	},
	Scene: function(alias) {
		return Engine.Scenes[alias];
	},
	CreateCamera: function(scene, alias, type, options) {
		return Engine.Scenes[scene].CreateCamera(alias, type, options);
	},
	Camera: function(scene, alias) {
		return Engine.Scenes[scene].Cameras[alias];
	},
	CreateEntityManager: function(scene, alias, options) {
		return Engine.Scenes[scene].CreateEntityManager(alias, options);
	},
	EntityManager: function(scene, alias) {
		return Engine.Scenes[scene].EntityManagers[alias];
	},
	CreateEntity: function(scene, manager, type, options) {
		return Engine.Scenes[scene].EntityManagers[manager].CreateEntity(type, options);
	},
	CreateControl: function(scene, alias, type, options) {
		return Engine.Scenes[scene].CreateControl(alias, type, options);
	},
	Control: function(scene, alias) {
		return Engine.Scenes[scene].Controls[alias];
	},
	// Textures
	Textures: {},
	LoadTexture: function(alias, uri) {
		var image = new Image();
		image.Texture = Engine.GL.createTexture();
		image.onload = function() {
			Engine.GL.bindTexture(Engine.GL.TEXTURE_2D, this.Texture);
			Engine.GL.pixelStorei(Engine.GL.UNPACK_FLIP_Y_WEBGL, true);
			Engine.GL.texParameteri(Engine.GL.TEXTURE_2D, Engine.GL.TEXTURE_WRAP_S, Engine.GL.CLAMP_TO_EDGE);
			Engine.GL.texParameteri(Engine.GL.TEXTURE_2D, Engine.GL.TEXTURE_WRAP_T, Engine.GL.CLAMP_TO_EDGE);
			Engine.GL.texParameteri(Engine.GL.TEXTURE_2D, Engine.GL.TEXTURE_MAG_FILTER, Engine.GL.NEAREST);
			Engine.GL.texParameteri(Engine.GL.TEXTURE_2D, Engine.GL.TEXTURE_MIN_FILTER, Engine.GL.NEAREST);
			Engine.GL.texImage2D(Engine.GL.TEXTURE_2D, 0, Engine.GL.RGBA, Engine.GL.RGBA, Engine.GL.UNSIGNED_BYTE, this);
			Engine.GL.bindTexture(Engine.GL.TEXTURE_2D, null);
		}

		image.src = uri;

		Engine.Textures[alias] = image.Texture;
	},
	Texture: function(alias) {
		return Engine.Textures[alias];
	},
};
Engine.Keyboard = {
	State: [
		[],
		[],
		[],
	],
	Initialize: function() {
		document.body.addEventListener("keydown", function(e){Engine.Keyboard.OnKeyDown(e)});
		document.body.addEventListener("keyup", function(e){Engine.Keyboard.OnKeyUp(e)});
	},
	OnKeyDown: function(event) {
		this.State[0][event.keyCode] = true;
	},
	OnKeyUp: function(event) {
		this.State[0][event.keyCode] = false;
	},
	Update: function() {
		this.State[2] = this.State[1].slice();
		this.State[1] = this.State[0].slice();
	},
};
Engine.Mouse = {
	State: [
		{Position: [0, 0], Buttons: []},
		{Position: [0, 0], Buttons: []},
		{Position: [0, 0], Buttons: []},
	],
	Initialize: function() {
		document.body.addEventListener("mousemove", function(e){Engine.Mouse.OnMouseMove(e)});
		document.body.addEventListener("mousedown", function(e){Engine.Mouse.OnMouseDown(e)});
		document.body.addEventListener("mouseup", function(e){Engine.Mouse.OnMouseUp(e)});
	},
	OnMouseMove: function(event) {
		this.State[0].Position[0] = window.pageXOffset + event.clientX - Engine.GetCanvasPositionX();
		this.State[0].Position[1] = window.pageYOffset + event.clientY - Engine.GetCanvasPositionY();
	},
	OnMouseDown: function(event) {
		this.State[0].Buttons[event.button] = true;
	},
	OnMouseUp: function(event) {
		this.State[0].Buttons[event.button] = false;
	},
	Update: function() {
		this.State[2].Position = this.State[1].Position.slice();
		this.State[2].Buttons = this.State[1].Buttons.slice();
		this.State[1].Position = this.State[0].Position.slice();
		this.State[1].Buttons = this.State[0].Buttons.slice();
	},
};