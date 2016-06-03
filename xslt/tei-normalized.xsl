<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="speaker">
        <cite class="speaker"><xsl:apply-templates /></cite>
    </xsl:template>

    <xsl:template match="label">
        <span class="label"><xsl:apply-templates /></span>
    </xsl:template>

    <xsl:template match="sp">
        <blockquote>
            <xsl:apply-templates />
        </blockquote>
    </xsl:template>

    <xsl:template match="p">
        <p><xsl:apply-templates /></p>
    </xsl:template>

    <xsl:template match="l">
        <span class="line"><xsl:apply-templates /></span>
    </xsl:template>

     <xsl:template match="choice">
        <xsl:apply-templates select="reg|expan|seg[@type='canonical']" />
    </xsl:template>
    
    <xsl:template match="orig">
    </xsl:template>

    <xsl:template match="lb">
        <br/>
    </xsl:template>

    <xsl:template match="del">
    </xsl:template>

    <xsl:template match="seg[@type='supralinear']">
        <sup><xsl:apply-templates /></sup>
    </xsl:template>

    <xsl:template match="unclear">
        <span class="unclear"><xsl:apply-templates /></span>
    </xsl:template>

</xsl:stylesheet>
