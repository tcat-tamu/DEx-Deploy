<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
  xmlns:tei="http://www.tei-c.org/ns/1.0"
  xmlns="http://www.w3.org/TR/REC-html40">

   <xsl:output method="html"/>
    <xsl:template match="/">
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <title>Original Extract Text</title>
                <style>
                    <![CDATA[
                        .extract {
                            position: relative;
                            margin: 1em 0;
                            padding: 1em;
                            border: 1px solid #ddd;
                        }

                        .extract > a[href^='#'] {
                            display: none;
                            position: absolute;
                            top: 0.5em;
                            right: 0.5em;
                            text-decoration: none;
                            color: #ddd;
                        }

                        .extract:hover > a[href^='#'] {
                            display: inline;
                        }
                        
                        .speaker {
                            font-weight: bold;
                        }

                        .line {
                            display: block;
                        }

                        .label {
                            font-style: italic;
                        }

                        cite.meta {
                            font-size: 0.7em;
                            font-style: normal;
                            color: #999;
                        }
                        
                        .unclear {
                            color: #900;
                        }
                    ]]>
                </style>
            </head>
            <body>
                <xsl:apply-templates select="/tei:TEI/tei:text/tei:body/tei:div[@type='extract']" />
            </body>
        </html>
    </xsl:template>

    <xsl:template match="tei:div">
        <div id="{generate-id(.)}" class="extract">
            <a href="#{generate-id(.)}">&#xb6;</a>
            <xsl:apply-templates />
            <cite class="meta">
                [
                <xsl:value-of select="@corresp" />
                <xsl:if test="@corresp and @n">, </xsl:if>
                <xsl:value-of select="@n" />
                ]
            </cite>
        </div>
    </xsl:template>

    <xsl:template match="tei:speaker">
        <cite class="speaker"><xsl:apply-templates /></cite>
    </xsl:template>

    <xsl:template match="tei:label">
        <span class="label"><xsl:apply-templates /></span>
    </xsl:template>

    <xsl:template match="tei:sp">
        <blockquote>
            <xsl:apply-templates />
            <cite class="meta">
                [
                <xsl:value-of select="@who" />
                <xsl:if test="@who and @n">, </xsl:if>
                <xsl:value-of select="@n" />
                ]
            </cite>
        </blockquote>
    </xsl:template>

    <xsl:template match="tei:p">
        <p><xsl:apply-templates /></p>
    </xsl:template>

    <xsl:template match="tei:l">
        <span class="line"><xsl:apply-templates /></span>
    </xsl:template>

    <xsl:template match="tei:choice">
        <xsl:apply-templates select="tei:orig|tei:abbr" />
    </xsl:template>

    <xsl:template match="tei:lb">
        <br/>
    </xsl:template>

    <xsl:template match="tei:del">
        <del><xsl:apply-templates /></del>
    </xsl:template>

    <xsl:template match="tei:seg[@type='supralinear']">
        <sup><xsl:apply-templates /></sup>
    </xsl:template>

    <xsl:template match="tei:unclear">
        <span class="unclear">??</span>
    </xsl:template>

</xsl:stylesheet>
